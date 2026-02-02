# 🚀 Quick Deployment Instructions

## ⚡ Deploy in 5 Minutes

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
cd "c:\Users\KIIT\Downloads\ScriptKiddie913.github.io-main (2)\ScriptKiddie913.github.io-main"
vercel login
vercel
```

### Step 3: Add Your API Key (IMPORTANT!)
```bash
vercel env add RESEND_API_KEY production
```
When prompted, paste: `re_9eyKRGTA_KWCoMiYee7kriTTRYmxP6V84`

### Step 4: Redeploy with Environment Variable
```bash
vercel --prod
```

## ✅ You're Done!

Your portfolio is now live with a working contact form that sends emails to: **sagnik.saha.raptor@gmail.com**

## 🧪 Test the Contact Form

1. Go to your deployed URL
2. Scroll to the Contact section
3. Fill out the form
4. Submit
5. Check your email inbox!

## 📝 What Changed

✅ **Added:** Professional contact form with secure email handling
✅ **Removed:** Hobbies/interests section (trekking, content writing)
✅ **Removed:** School education details
✅ **Kept:** All certifications, KIIT education, professional experience

## 🔒 Security Notes

- Your API key is stored securely in Vercel's environment variables
- It's never exposed in the client-side code
- The `.env.local` file is in `.gitignore` so it won't be committed to Git
- All emails are sent through a serverless function

## 🆘 Need Help?

Check the detailed guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
