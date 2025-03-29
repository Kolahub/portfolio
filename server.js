const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: ".env.local" });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Debug middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Contact API endpoint
app.post("/api/contact", async (req, res) => {
  try {
    console.log("Contact form submission received:", req.body);

    const {
      name,
      email,
      subject = "New contact form message",
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing required fields",
        message: "Please fill in all required fields",
      });
    }

    // Log environment variables (without sensitive info)
    // console.log("SMTP Configuration:");
    // console.log("- SMTP_HOST:", process.env.SMTP_HOST);
    // console.log("- SMTP_PORT:", process.env.SMTP_PORT);
    // console.log("- SMTP_USER:", process.env.SMTP_USER);
    // console.log("- Has SMTP_PASSWORD:", !!process.env.SMTP_PASSWORD);

    // Create email transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "ayofefaheez@gmail.com",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified successfully!");
    } catch (verifyError) {
      console.error("❌ SMTP verification failed:", verifyError);
      return res.status(500).json({
        error: "Email configuration error",
        message:
          "There was a problem with the email configuration. Please try contacting me directly at ayofefaheez@gmail.com",
      });
    }

    // Create email content
    const mailOptions = {
      from: `"Portfolio Contact" <${
        process.env.EMAIL_FROM || "ayofefaheez@gmail.com"
      }>`,
      to: process.env.EMAIL_TO || "ayofefaheez@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #6d28d9;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
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

      // Return error response
      return res.status(500).json({
        error: "Email sending failed",
        message:
          "There was a problem sending your message. Please try again or contact me directly at ayofefaheez@gmail.com",
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
});

// Simple health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`
┌─────────────────────────────────────────────────┐
│                                                 │
│   Contact Form Server running on port ${PORT}    │
│                                                 │
│   - POST /api/contact - For contact submissions │
│   - GET  /api/health  - Health check endpoint   │
│                                                 │
└─────────────────────────────────────────────────┘
  `);
});
