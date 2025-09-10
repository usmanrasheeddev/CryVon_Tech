// app/api/contact/route.js
const mailOptions = {
  from: process.env.EMAIL_USER, // HAMESHA tumhara hi email
  to: process.env.TO_EMAIL,     // Tumhara hi email (receiver)
  replyTo: email,               // User ki email (agar tum reply karna chaho)
  subject: `New Message from ${name} - EdgeRise Website`,
  html: `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p> 
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
  `,
};