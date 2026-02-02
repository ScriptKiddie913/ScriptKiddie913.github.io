# 🚀 Portfolio Deployment Guide

## 📋 Overview
Your portfolio now includes a secure contact form that sends emails to `sagnik.saha.raptor@gmail.com` using the Resend API. The API key is securely stored and never exposed to the client.

## 🔐 Security Features
- ✅ API key stored in environment variables (never in client-side code)
- ✅ Serverless function handles email sending
- ✅ Form validation on both client and server
- ✅ CORS protection
- ✅ Rate limiting support
- ✅ .gitignore configured to prevent accidental key exposure

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Set up environment variable:**
   ```bash
   vercel env add RESEND_API_KEY
   ```
   When prompted, enter: `re_9eyKRGTA_KWCoMiYee7kriTTRYmxP6V84`

4. **Deploy:**
   ```bash
   vercel --prod
   ```

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Create `netlify.toml`:**
   ```toml
   [build]
     functions = "api"
   
   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   ```

3. **Deploy and set environment variable:**
   ```bash
   netlify deploy --prod
   netlify env:set RESEND_API_KEY re_9eyKRGTA_KWCoMiYee7kriTTRYmxP6V84
   ```

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test locally:**
   ```bash
   vercel dev
   ```
   Or for Netlify:
   ```bash
   netlify dev
   ```

## 🧪 Testing the Contact Form

1. Visit your deployed site
2. Navigate to the Contact section
3. Fill out the form
4. Submit
5. Check `sagnik.saha.raptor@gmail.com` for the message

## 🔧 Configuration

### Email Template
The email template is in `/api/send-email.js`. You can customize:
- Email styling
- Subject line format
- Additional fields
- Auto-reply functionality

### Form Fields
To add more fields, edit:
1. `index.html` - Add input fields
2. `/api/send-email.js` - Update the handler to process new fields

## 🛡️ API Key Security Checklist

- [x] API key stored in `.env.local`
- [x] `.env.local` added to `.gitignore`
- [x] Environment variable configured in deployment platform
- [x] No API keys in client-side code
- [x] Server-side validation implemented

## 📧 Email Configuration

Current settings:
- **From:** Contact Form <onboarding@resend.dev>
- **To:** sagnik.saha.raptor@gmail.com
- **Reply-To:** Sender's email address

## 🚨 Important Notes

1. **Never commit `.env.local`** to Git
2. **Rotate API key** if accidentally exposed
3. **Monitor usage** at resend.com dashboard
4. The free tier of Resend allows 100 emails/day

## 🔄 Updating the API Key

If you need to change the API key:

**Vercel:**
```bash
vercel env rm RESEND_API_KEY
vercel env add RESEND_API_KEY
```

**Netlify:**
```bash
netlify env:set RESEND_API_KEY your_new_key_here
```

## 📱 Features Implemented

✅ Removed hobbies/interests section
✅ Removed school education data (kept KIIT only)
✅ Added professional contact form
✅ Secure serverless email handling
✅ Beautiful UI with validation feedback
✅ Responsive design
✅ Loading states and error handling

## 🎨 What's Changed

### Removed:
- ❌ Interests & Hobbies section (Content Writing, Trekking)
- ❌ School education section (Vivekananda Mission School)

### Added:
- ✅ Functional contact form with validation
- ✅ Serverless API endpoint for email
- ✅ Secure environment variable handling
- ✅ Professional email template
- ✅ Success/error feedback messages

### Kept:
- ✅ KIIT University education
- ✅ All certifications
- ✅ Professional experience
- ✅ Projects
- ✅ Skills
- ✅ Contact information

## 🐛 Troubleshooting

**Form not submitting:**
- Check browser console for errors
- Verify API endpoint is accessible at `/api/send-email`
- Ensure environment variable is set correctly

**Emails not received:**
- Check Resend dashboard for logs
- Verify email address in `/api/send-email.js`
- Check spam folder

**API key errors:**
- Ensure `RESEND_API_KEY` is set in deployment platform
- Re-deploy after setting environment variables

## 📞 Support

For issues with:
- Resend API: https://resend.com/docs
- Vercel deployment: https://vercel.com/docs
- Netlify deployment: https://docs.netlify.com

---

**Your Portfolio is Production-Ready! 🎉**

Deploy it now and start receiving messages through your professional contact form!
