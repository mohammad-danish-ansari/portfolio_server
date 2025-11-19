import * as Brevo from "@getbrevo/brevo";
import dotenv from "dotenv";

dotenv.config();

export const emailBookingDetails = async (data) => {
  try {
    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    const sendSmtpEmail = {
      sender: { email: process.env.FROM_EMAIL },
      to: [{ email: process.env.EMAIL_TO }],
      subject: "New Contact Message",
      htmlContent: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("Brevo Email Sent (API)!");
  } catch (error) {
    console.log("Brevo API Error:", error.message);
  }
};


export default emailBookingDetails;

