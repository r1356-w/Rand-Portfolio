const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// السيرفر سيعين البورت تلقائياً عبر NodeJS Manager
const PORT = process.env.PORT || 3000;

// إعدادات الميدل وير
app.use(cors());
app.use(express.json());

// --- تشغيل الملفات الثابتة من المجلد الحالي ---
// بما أن index.html والملفات بجانب هذا الملف مباشرة
app.use(express.static(path.join(__dirname, '.')));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// إعداد خدمة البريد الإلكتروني
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true لـ 465، false لـ 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // لتجاوز مشاكل شهادة الأمان في بعض الاستضافات
  }
});

// وظيفة معالجة الإيميلات (مكررة للمسارين لضمان العمل في المجلد الفرعي)
const handleContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1. إرسال إيميل لكِ
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, 
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
};

// روابط الـ API
app.post('/api/contact', handleContact);
app.post('/randportfolio/api/contact', handleContact);

// خدمة تطبيق React (أي رابط غير الـ API يفتح index.html)
app.get('*', (req, res) => {
  // إذا كان الرابط يبدأ بـ api فهو خطأ 404 للـ API
  if (req.path.startsWith('/api') || req.path.startsWith('/randportfolio/api')) {
    return res.status(404).json({ error: 'Endpoint not found' });
  }
  
  // توجيه المستخدم لملف الصفحة الرئيسية
  res.sendFile(path.join(__dirname, 'index.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});