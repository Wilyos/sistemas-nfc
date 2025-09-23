
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

app.post('/api/send-pdf', upload.single('pdf'), async (req, res) => {
  const { nombre, empresa, mensaje } = req.body;
  const pdfPath = req.file.path;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'correos.sistemaslit@gmail.com',
      pass: 'nsygodrsqghauaop'
    }
  });

  try {
    await transporter.sendMail({
      from: 'correos.sistemaslit@gmail.com',
      to: 'correos.sistemasnfc@gmail.com',
      subject: 'Cotización NFC',
      text: mensaje || `Cotización de ${nombre || empresa}`,
      attachments: [
        {
          filename: 'tarjeta-personalizada.pdf',
          path: pdfPath
        }
      ]
    });
    fs.unlinkSync(pdfPath);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = app;
