# Rand Oraij — Professional Portfolio

A minimalist, high-end engineering portfolio featuring a dynamic profile image, comprehensive experience timeline, and functional contact system — built with React.js, Tailwind CSS, Framer Motion, and Node.js backend.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development servers (frontend + backend)
npm run dev

# 3. Open in browser
# Frontend: http://localhost:3002
# Backend: http://localhost:3001
```

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js 18 | Core UI framework |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Node.js | Backend server |
| Nodemailer | Email service |
| Express.js | API framework |

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero/
│   │   └── Hero.js          # Landing section with profile image and orbital animations
│   ├── Experience/
│   │   └── Experience.js    # Timeline experience section with work/education
│   ├── Education/
│   │   └── Education.js     # Education section with academic background
│   ├── Contact/
│   │   └── Contact.js       # Contact form with email functionality
│   └── UI/
│       ├── Navbar.js         # Fixed navigation bar
│       ├── Footer.js         # Footer
│       └── SectionLabel.js   # Reusable section label
├── hooks/
│   ├── useMousePosition.js   # Mouse tracking utilities
│   └── useInView.js          # Intersection observer hook
├── App.js                  # Main app component
├── index.js               # App entry point
└── index.css              # Global styles
server.js                    # Email backend server
.env                         # Environment variables
package.json                 # Dependencies and scripts
```

## 📧 Email System

### Backend Configuration
- **Server**: Express.js on port 3001
- **Email Service**: Nodemailer with Gmail SMTP
- **DNS Bypass**: Direct IP connection (142.250.102.108:587)
- **Features**: 
  - Sends email to `randorij27@gmail.com`
  - Sends confirmation email to user
  - Error handling and logging
  - CORS enabled for frontend

### Frontend Integration
- **API Endpoint**: `/api/contact`
- **Form Fields**: Name, Email, Message
- **Status States**: Sending, Success, Error
- **Fallback**: Error display with retry option

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Primary BG | `#0F172A` | Deep navy background |
| Accent / Neon | `#22D3EE` | Cyan highlights |
| Sub-text | `#94A3B8` | Secondary text |
| Action / Glow | `#A855F7` | Purple accents |

### Typography
- **Display**: Clash Display (headings)
- **Body**: Satoshi (paragraphs)
- **Mono**: JetBrains Mono (code/tags)

## � Features

### Hero Section
- **Profile Image**: Circular profile photo with glowing shadow effect
- **Orbital Animations**: Three rotating rings around profile
- **Floating Tech Labels**: Animated technology badges
- **Status Badge**: "Available for opportunities" indicator

### Experience & Education
- **Timeline Layout**: Vertical timeline with connecting line
- **Glass Cards**: Frosted glass effect for entries
- **Color Coding**: Cyan for work, Purple for education
- **Skill Tags**: Technology tags for each entry

### Contact System
- **Functional Form**: Real email sending via backend
- **Validation**: Required fields and email format
- **Status Feedback**: Loading, success, and error states
- **Accessibility**: Proper labels and ARIA attributes

## 🚀 Deployment

### Development
```bash
# Start both servers
npm run dev

# Frontend only
npm start

# Backend only  
npm run server
```

### Production Build
```bash
npm run build
```

### Environment Setup
1. Copy `.env.example` to `.env`
2. Configure email settings:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3001
   ```
3. Enable 2FA and generate App Password in Gmail

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy build/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload build/ folder to your hosting provider
```

## 🔧 Configuration Files

### package.json Scripts
- `npm start` - Frontend dev server (port 3002)
- `npm run server` - Backend email server (port 3001)  
- `npm run dev` - Both servers concurrently
- `npm run build` - Production build

### Environment Variables
- `EMAIL_USER` - Gmail address for sending emails
- `EMAIL_PASS` - Gmail App Password (16 characters)
- `PORT` - Backend server port (default: 3001)

## 📊 Project Overview

This portfolio demonstrates:
- **Full-stack development** with React and Node.js
- **Email integration** using Nodemailer and Gmail SMTP
- **Modern animations** with Framer Motion
- **Responsive design** with Tailwind CSS
- **Component architecture** with reusable UI elements
- **Professional presentation** suitable for job applications

---

Built by Rand Oraij · [GitHub](https://github.com/r1356-w)
