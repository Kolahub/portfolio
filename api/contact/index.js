// Contact form API endpoint using nodemailer
import nodemailer from "nodemailer";

// Direct access to environment variables - hardcoded for debugging
const SMTP_CONFIG = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  user: "ayofefaheez@gmail.com",
  password: process.env.SMTP_PASSWORD || "bwhorjhsrltgcxzl", // Replace this in production
  from: "ayofefaheez@gmail.com",
  to: "ayofefaheez@gmail.com",
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
      message: "Only POST requests are supported",
    });
  }

  try {
    // Get data from request body
    const {
      name,
      email,
      subject = "New contact from portfolio",
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing required fields",
        message: "Please fill in all required fields",
      });
    }

    // Log all environment variables for debugging (without passwords)
    console.log("DEBUG - Environment variables:");
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASSWORD exists:", !!process.env.SMTP_PASSWORD);

    // Use the hardcoded config for testing
    const config = {
      host: SMTP_CONFIG.host,
      port: SMTP_CONFIG.port,
      secure: SMTP_CONFIG.secure,
      auth: {
        user: SMTP_CONFIG.user,
        pass: process.env.SMTP_PASSWORD || SMTP_CONFIG.password,
      },
      from: SMTP_CONFIG.from,
      to: SMTP_CONFIG.to,
    };

    // Log config (without password) for debugging
    console.log("Email config:", {
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass ? "[PASSWORD SET]" : "[PASSWORD MISSING]",
      },
      from: config.from,
      to: config.to,
    });

    // Check if email configuration is available
    if (!config.auth.pass || config.auth.pass === "your_app_password_here") {
      console.warn(
        "⚠️ Email configuration is incomplete. SMTP_PASSWORD is missing or not properly set."
      );

      // In production, this would be an error
      // For now, return a helpful message
      return res.status(200).json({
        success: true,
        debug: true,
        message:
          "Message received! (Note: Email sending is not configured - please set SMTP_PASSWORD in .env.local)",
      });
    }

    // Create email transport
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    });

    // Verify SMTP connection configuration
    try {
      await transporter.verify();
      console.log("📧 SMTP connection verified successfully!");
    } catch (verifyError) {
      console.error("❌ SMTP verification failed:", verifyError);
      return res.status(500).json({
        error: "Email configuration error",
        message: `SMTP verification failed: ${verifyError.message}. Please contact me directly at ${config.from}`,
      });
    }

    // Create email content
    const mailOptions = {
      from: `"Portfolio Contact" <${config.from}>`,
      to: config.to,
      replyTo: email,
      subject: `Portfolio Contact: ${subject || "New message"}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #6d28d9;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "No subject"}</p>
          <div style="margin-top: 20px; border-left: 4px solid #6d28d9; padding-left: 15px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #666;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully:", info.messageId);

      // Return success response
      return res.status(200).json({
        success: true,
        message: "Your message has been sent! I will get back to you soon.",
      });
    } catch (emailError) {
      console.error("❌ Error sending email:", emailError);

      // Return error response but don't expose details
      return res.status(500).json({
        error: "Email sending failed",
        message: `Failed to send email: ${emailError.message}. Please contact me directly at ${config.from}`,
      });
    }
  } catch (error) {
    console.error("❌ Contact API error:", error);

    // Return error response
    return res.status(500).json({
      error: "Server error",
      message:
        "There was a problem processing your request. Please try again later.",
    });
  }
}
