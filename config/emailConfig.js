// config/emailConfig.js
const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Use 587 for TLS or 465 for SSL
    secure: false, // Use TLS if port is 587
    auth: {
      user: process.env.EMAIL_USER, // Gmail address
      pass: process.env.EMAIL_PASS, // App Password
    },
    logger: true, // Logs SMTP communication
    debug: true, // Enables debug output
  });

module.exports = transporter;

