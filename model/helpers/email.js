import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const emailBookingDetails = async (data) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER, 
        pass: process.env.BREVO_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL,      // <-- IMPORTANT (verified sender)
      to: process.env.EMAIL_TO,
      subject: "New Contact Message",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Brevo Email Sent!");
  } catch (error) {
    console.log("Brevo Email Error:", error.message);
  }
};

export default emailBookingDetails;

