const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

// Handle subfolder routing for randportfolio
app.use('/randportfolio', express.static(path.join(__dirname, 'build')));

// Environment detection
const isProduction = process.env.NODE_ENV === 'production';

// Email configuration with production support
const transporter = nodemailer.createTransport({
  host: isProduction ? process.env.SMTP_HOST : '142.250.102.108', // Production: from env, Dev: direct IP
  port: isProduction ? process.env.SMTP_PORT : 587,
  secure: isProduction ? (process.env.SMTP_SECURE === 'true') : false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Contact form endpoint - handles both root and subfolder
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send email to yourself
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fa; border-radius: 8px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; padding: 15px; background: #f8f9fa; border-left: 4px solid #007bff; border-radius: 4px;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #6c757d; text-align: center; margin: 0;">
            Sent from your portfolio website
          </p>
        </div>
      `
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me - Rand Oraij',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fa; border-radius: 8px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Thank You for Reaching Out!</h2>
          <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0 0 15px 0;">Hi ${name},</p>
            <p style="margin: 0 0 15px 0;">Thank you for contacting me through my portfolio. I've received your message and will get back to you within 24 hours.</p>
            <p style="margin: 0 0 15px 0;">Best regards,<br>Rand Oraij</p>
          </div>
          <p style="font-size: 12px; color: #6c757d; text-align: center; margin: 0;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      `
    });

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ 
      success: false, 
      message: `Failed to send email: ${error.message}` 
    });
  }
});

// Copy API route for subfolder
app.post('/randportfolio/api/contact', async (req, res) => {
  // Handle the request the same way as the main endpoint
  const { name, email, message } = req.body;

  try {
    // Send email to yourself
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fa; border-radius: 8px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; padding: 15px; background: #f8f9fa; border-left: 4px solid #007bff; border-radius: 4px;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #6c757d; text-align: center; margin: 0;">
            Sent from your portfolio website
          </p>
        </div>
      `
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me - Rand Oraij',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fa; border-radius: 8px;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Thank You for Reaching Out!</h2>
          <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0 0 15px 0;">Hi ${name},</p>
            <p style="margin: 0 0 15px 0;">Thank you for contacting me through my portfolio. I've received your message and will get back to you within 24 hours.</p>
            <p style="margin: 0 0 15px 0;">Best regards,<br>Rand Oraij</p>
          </div>
          <p style="font-size: 12px; color: #6c757d; text-align: center; margin: 0;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      `
    });

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ 
      success: false, 
      message: `Failed to send email: ${error.message}` 
    });
  }
});

// Serve React app
app.get('*', (req, res) => {
  // If it's an API request, let it be handled by the API routes
  if (req.path.startsWith('/api') || req.path.startsWith('/randportfolio/api')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  // Serve static files from build folder
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service ready`);
});