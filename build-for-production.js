// Production build script
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏗 Building for production...');

// Set production environment
process.env.NODE_ENV = 'production';

// Build the React app
console.log('📦 Building React app...');
execSync('npm run build', { stdio: 'inherit' });

// Create production .env file
console.log('📝 Creating production .env...');
const prodEnv = `NODE_ENV=production
EMAIL_USER=${process.env.EMAIL_USER || 'randorij27@gmail.com'}
EMAIL_PASS=${process.env.EMAIL_PASS || 'YOUR_APP_PASSWORD'}
SMTP_HOST=${process.env.SMTP_HOST || 'smtp.gmail.com'}
SMTP_PORT=${process.env.SMTP_PORT || '587'}
SMTP_SECURE=${process.env.SMTP_SECURE || 'false'}
PORT=3001`;

fs.writeFileSync(path.join(__dirname, '.env.production'), prodEnv);

console.log('✅ Production build complete!');
console.log('📁 Files ready in build/ folder');
console.log('🌐 Ready for deployment to: site53742-qpl6iw.scloudsite101.com');
console.log('');
console.log('📋 Next steps:');
console.log('1. Upload build/ folder to /home/rand/public_html via FTP');
console.log('2. Copy .env.production to .env on server');
console.log('3. Restart server on hosting');
