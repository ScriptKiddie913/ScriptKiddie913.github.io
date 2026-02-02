// Serverless function for handling contact form submissions
// Deploy this to Vercel/Netlify as a serverless function

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Import Resend only when needed
    const { Resend } = await import('resend');
    
    // Initialize Resend with API key from environment variable
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['sagnik.saha.raptor@gmail.com'],
      replyTo: email,
      subject: `[DISAVOWED913] Secure Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Courier New', monospace; line-height: 1.6; color: #00ffd5; background: #001820; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #00ffd5, #0aff9d); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: #001820; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 2px; }
            .content { background: rgba(7, 21, 32, 0.9); padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid rgba(0, 255, 213, 0.2); }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0aff9d; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; }
            .value { background: rgba(0,0,0,0.5); padding: 15px; border-radius: 5px; border-left: 4px solid #00ffd5; color: #dbe7e7; }
            .footer { text-align: center; margin-top: 20px; color: #9aa7ad; font-size: 12px; }
            .timestamp { color: #00ffd5; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔐 SECURE TRANSMISSION RECEIVED</h1>
              <p style="color: #001820; margin: 5px 0 0 0; font-size: 14px;">DISAVOWED913 OPERATIONS</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">🎯 SOURCE:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📡 CONTACT VECTOR:</div>
                <div class="value"><a href="mailto:${email}" style="color: #00ffd5;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📋 OPERATION CODE:</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">📄 INTEL PAYLOAD:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>▣ Secure transmission protocol activated</p>
                <p class="timestamp">TIMESTAMP: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST</p>
                <p style="color: #666; font-size: 10px; margin-top: 10px;">disavowed913.portfolio.system</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('Email sent successfully:', data);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Mail delivery system unavailable', 
      message: 'Please try again later'
    });
  }
}
