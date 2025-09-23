
const nodemailer = require('nodemailer');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const upload = multer({ dest: '/tmp/' }); // Vercel solo permite /tmp para archivos temporales
app.use(cors());
app.use(express.json());

// Multer para dos archivos: pdfAnverso y pdfReverso
const multiUpload = upload.fields([
  { name: 'pdfAnverso', maxCount: 1 },
  { name: 'pdfReverso', maxCount: 1 }
]);

app.post('/api/send-pdf', multiUpload, async (req, res) => {
  const { nombre, empresa, mensaje } = req.body;
  const pdfAnversoPath = req.files?.pdfAnverso?.[0]?.path;
  const pdfReversoPath = req.files?.pdfReverso?.[0]?.path;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'correos.sistemaslit@gmail.com',
      pass: 'nsygodrsqghauaop'
    }
  });

  try {
    const attachments = [];
    if (pdfAnversoPath) {
      attachments.push({ filename: 'tarjeta-anverso.pdf', path: pdfAnversoPath });
    }
    if (pdfReversoPath) {
      attachments.push({ filename: 'tarjeta-reverso.pdf', path: pdfReversoPath });
    }
    await transporter.sendMail({
      from: 'correos.sistemaslit@gmail.com',
      to: 'correos.sistemasnfc@gmail.com',
      subject: 'Cotización NFC',
      text: mensaje || `Cotización de ${nombre || empresa}`,
      attachments
    });
    // Eliminar archivos temporales
    if (pdfAnversoPath) fs.unlinkSync(pdfAnversoPath);
    if (pdfReversoPath) fs.unlinkSync(pdfReversoPath);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = app;
