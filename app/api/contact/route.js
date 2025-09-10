// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name: userName, email: userEmail, message: userMessage } = await request.json();

    // Email transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      replyTo: userEmail,
      subject: `New Message from ${userName} - EdgeRise Website`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Message:</strong> ${userMessage}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Email send karo
    await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully to:', process.env.TO_EMAIL);
    
    return Response.json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('❌ Email sending error:', error);
    return Response.json({ error: 'Email not sent' }, { status: 500 });
  }
}