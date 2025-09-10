// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Email transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: `New Message from ${name} - EdgeRise Website`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // 3. Email send karo
    await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully to:', process.env.TO_EMAIL);
    
    return Response.json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('❌ Email sending error:', error);
    return Response.json({ error: 'Email not sent' }, { status: 500 });
  }
}