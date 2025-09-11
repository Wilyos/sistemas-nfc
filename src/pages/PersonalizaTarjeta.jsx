import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import './PersonalizaTarjeta.css';
import { FaRegUser } from "react-icons/fa";
import { FiPhone, FiStar } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

// Organización de plantillas en pares anverso/reverso
const plantillasPorCategoria = [
  {
    categoria: 'Corporativas',
    plantillas: [
      { nombre: 'C1', anverso: '/plantillas/corporativas/C1.png', reverso: '/plantillas/corporativas/C2.png' },
      { nombre: 'Corporativa 1', anverso: '/plantillas/corporativas/c-frente1.png', reverso: '/plantillas/corporativas/corporativa2.png' },
    ]
  },
  {
    categoria: 'Creativas',
    plantillas: [
      { nombre: 'A1', anverso: '/plantillas/creativas/A1.png', reverso: '/plantillas/creativas/A2.png' },
      { nombre: 'E1', anverso: '/plantillas/creativas/E1.png', reverso: '/plantillas/creativas/E2.png' },
    ]
  },
  {
    categoria: 'Minimalistas',
    plantillas: [
      { nombre: 'B1', anverso: '/plantillas/minimalistas/B1.png', reverso: '/plantillas/minimalistas/B2.png' },
      { nombre: 'D1', anverso: '/plantillas/minimalistas/D1.png', reverso: '/plantillas/minimalistas/D2.png' },
      { nombre: 'Minimalista', anverso: '/plantillas/minimalistas/minimalista.png', reverso: '/plantillas/minimalistas/minimalista.png' },
    ]
  }
];

function PersonalizaTarjeta() {
  // Estados principales
  const [empresa, setEmpresa] = useState('');
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [contacto, setContacto] = useState({ email: '', telefono: '', direccion: '', twitter: '', facebook: '', instagram: '', nombre: '', cargo: '', qr: '' });
  const [color, setColor] = useState('#black');
  // Estados separados para anverso y reverso
  const [plantillaAnverso, setPlantillaAnverso] = useState('');
  const [plantillaReverso, setPlantillaReverso] = useState('');
  const canvasRef = useRef(null);
  // Refs para las vistas previas
  const anversoRef = useRef(null);
  const reversoRef = useRef(null);
  // Función para exportar ambas vistas previas a PDF
  const handleExportarPDF = async () => {
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [380, 220] });
    // Captura anverso
    if (anversoRef.current) {
      const canvasAnverso = await html2canvas(anversoRef.current, { scale: 3, useCORS: true });
      const imgAnverso = canvasAnverso.toDataURL('image/png');
      pdf.addImage(imgAnverso, 'PNG', 10, 10, 340, 190);
    }
    // Nueva página para reverso
    pdf.addPage([380, 220], 'landscape');
    if (reversoRef.current) {
      const canvasReverso = await html2canvas(reversoRef.current, { scale: 3, useCORS: true });
      const imgReverso = canvasReverso.toDataURL('image/png');
      pdf.addImage(imgReverso, 'PNG', 10, 10, 340, 190);
    }
    pdf.save('tarjeta-personalizada.pdf');
  };

  // Al seleccionar una plantilla de anverso, asigna automáticamente el reverso correspondiente
  const handleSeleccionarPlantilla = (anverso, reverso) => {
    setPlantillaAnverso(anverso);
    setPlantillaReverso(reverso);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setContacto(prev => ({ ...prev, logoUrl: ev.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Render principal: 3 columnas
  return (
    <section className="personaliza-section">
      <h2 className="personaliza-title">Personaliza tu Tarjeta de Presentación</h2>
      <div className="personaliza-container">
        {/* Columna izquierda: formulario */}
        <div className="card personaliza-form">
          <div className="personaliza-label" style={{textAlign:'center', marginBottom:16}}>
            <label style={{fontWeight:'bold', fontSize:18, color:'transparent',}}>Sube tu logo</label>
            <input type="file" accept="image/*" className="personaliza-input-file" onChange={handleLogoChange} />
          </div>
          <input className="personaliza-input" placeholder="Nombre de la empresa" value={empresa} onChange={e => setEmpresa(e.target.value)} />
          <input className="personaliza-input" placeholder="Nombre de la persona" value={nombre} onChange={e => setNombre(e.target.value)} />
          <input className="personaliza-input" placeholder="Cargo" value={cargo} onChange={e => setCargo(e.target.value)} />
          <input className="personaliza-input" placeholder="Email" value={contacto?.email || ''} onChange={e=>setContacto({...contacto, email: e.target.value})} />
          <input className="personaliza-input" placeholder="Teléfono" value={contacto?.telefono || ''} onChange={e=>setContacto({...contacto, telefono: e.target.value})} />
          <input className="personaliza-input" placeholder="Dirección" value={contacto?.direccion || ''} onChange={e=>setContacto({...contacto, direccion: e.target.value})} />
          <input className="personaliza-input" placeholder="@TwitterX" value={contacto?.twitter || ''} onChange={e=>setContacto({...contacto, twitter: e.target.value})} />
          <input className="personaliza-input" placeholder="@Facebook" value={contacto?.facebook || ''} onChange={e=>setContacto({...contacto, facebook: e.target.value})} />
          <input className="personaliza-input" placeholder="@Instagram" value={contacto?.instagram || ''} onChange={e=>setContacto({...contacto, instagram: e.target.value})} />
          <div className="personaliza-label" style={{marginTop:12}}>
            <label>Color de fuente (frente y reverso):</label>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} className="personaliza-input-color" />
          </div>
        </div>
        {/* Columna central: galería de plantillas (solo anverso, reverso se asigna automáticamente) */}
        <div className="card" style={{flex:'0 0 220px', display:'flex', flexDirection:'column', gap:16, alignItems:'center'}}>
          <div style={{fontWeight:'bold', color:'var(--color-white)', marginBottom:8}}>Fondos prediseñados</div>
          {plantillasPorCategoria.map(cat => (
            <div key={cat.categoria} style={{marginBottom:12}}>
              <div style={{fontWeight:'bold', fontSize:15, marginBottom:4}}>{cat.categoria}</div>
              <div style={{display:'flex', gap:8}}>
                {cat.plantillas.map((p,i) => (
                  <img
                    key={i}
                    src={p.anverso}
                    alt={p.nombre + ' Anverso'}
                    title={p.nombre + ' (Anverso)'}
                    style={{
                      width:60,
                      height:38,
                      borderRadius:8,
                      border: plantillaAnverso===p.anverso?'2px solid #10B981':'2px solid #eee',
                      cursor:'pointer',
                      objectFit:'cover'
                    }}
                    onClick={()=>handleSeleccionarPlantilla(p.anverso, p.reverso)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Columna derecha: vista previa de tarjetas */}
        <div className="tarjeta-preview" style={{gap:32}}>
          <h3>Vista previa</h3>
          {/* Vista previa frente (anverso) */}
          <div
            className="tarjeta-preview"
            ref={anversoRef}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 16px',
              width: 340,
              height: 190,
              background: plantillaAnverso ? `url(${plantillaAnverso}) center/cover no-repeat` : '#fff',
              border: '1px solid #eee',
              borderRadius: 12,
              boxShadow: '0 2px 8px #0001'
            }}
          >
            <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:6}}>
              <div style={{fontWeight:'bold',fontSize:18,color:color,marginBottom:2}}>{empresa || 'Nombre Empresa'}</div>
              <div style={{fontSize:15,marginBottom:2,color:color}}> <FiStar /> {cargo || 'Cargo'}</div>
              <div style={{fontSize:15,marginBottom:2,color:color}}><FaRegUser /> {nombre || 'Nombre Apellido'}</div>
              <div style={{fontSize:15,marginBottom:2,color:color}}><FiPhone /> {contacto?.telefono && <>{contacto.telefono}</>}</div>
              <div style={{fontSize:15,marginBottom:2,color:color}}><IoMailOutline /> {contacto?.email && <> {contacto.email}</>}</div>
            </div>
            <div style={{width:80, height:80, marginLeft:16, display:'flex', alignItems:'center', justifyContent:'center', background:'transparent', borderRadius:8, overflow:'hidden'}}>
              {contacto.logoUrl ? (
                <img src={contacto.logoUrl} alt="Logo" style={{maxWidth:'100%',maxHeight:'100%'}} />
              ) : (
                <span style={{color:'#bbb',fontSize:12}}>Logo</span>
              )}
            </div>
          </div>
          {/* Vista previa reverso */}
          <div
            className="tarjeta-preview"
            ref={reversoRef}
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 16,
              width: 340,
              height: 190,
              background: plantillaReverso ? `url(${plantillaReverso}) center/cover no-repeat` : '#fff',
              border: '1px solid #eee',
              borderRadius: 12,
              boxShadow: '0 2px 8px #0001'
            }}
          >
            <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:8}}>
              <div style={{fontWeight:'bold',fontSize:18,marginBottom:4,color:color}}>{empresa || 'Nombre Empresa'}</div>
              <div style={{margin:'12px 0'}}>
                {/* <QRCode value={contacto?.qr} size={64} /> */}
                <div style={{width:64,height:64,background:'#eee',display:'flex',alignItems:'center',justifyContent:'center',color:'#aaa',fontSize:12,border:'1px dashed #bbb'}}>QR</div>
                <div style={{fontSize:10,color:'#888'}}>Espacio para QR</div>
              </div>
              <div style={{display:'flex',gap:10,justifyContent:'center',marginTop:8}}>
                {contacto?.twitter && <span style={{fontSize:15,color:color}}> <FaXTwitter />: {contacto.twitter}</span>}
                {contacto?.facebook && <span style={{fontSize:15,color:color}}> <FaFacebookF />: {contacto.facebook}</span>}
                {contacto?.instagram && <span style={{fontSize:15,color:color}}> <FaInstagram />: {contacto.instagram}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="personaliza-actions">
        <button className="personaliza-enviar-btn" onClick={handleExportarPDF} type="button">
          Guardar PDF
        </button>
      <div className="asesoria-diseno-container">
          <span className="asesoria-diseno-label">
            ¿buscas algo más personalizado?
          </span>
          <a
            className="asesoria-diseno-btn"
            href="https://wa.me/573116111687"
            target="_blank"
            rel="noopener noreferrer"
          >
            asesoría de diseño
          </a>
        </div>
      </div>
    </section>
  );
}

export default PersonalizaTarjeta;
       