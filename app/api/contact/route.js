// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name: userName, email: userEmail, message: userMessage } = await request.json();

    // Gmail transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // sender (your Gmail)
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${userName}" <${process.env.EMAIL_USER}>`, // Always from your Gmail
      to: process.env.TO_EMAIL, // Receiver (your Gmail)
      replyTo: userEmail, // So you can reply to user directly
      subject: `New Message from ${userName} - CryVon Tech`,
      html: `
        <h3>New Contact Form Submission CryVon-Tech</h3>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Message:</strong> ${userMessage}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully to:", process.env.TO_EMAIL);

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return Response.json({ error: "Email not sent" }, { status: 500 });
  }
}
