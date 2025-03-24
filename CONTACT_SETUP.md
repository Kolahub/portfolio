# Contact Form Setup Guide

This portfolio site includes a serverless contact form using Next.js API routes and Nodemailer. Follow these steps to set it up correctly.

## Prerequisites

- A Gmail account (or any other email provider that offers SMTP services)
- If using Gmail, you'll need to create an App Password (see instructions below)

## Local Development Setup

1. Create a `.env.local` file in the root of your project with the following variables:

```
EMAIL_FROM=yourname@gmail.com
EMAIL_TO=yourname@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=yourname@gmail.com
SMTP_PASSWORD=your_app_specific_password
```

2. Replace the placeholder values with your actual email credentials.

## Creating a Gmail App Password

If you're using Gmail, you'll need to create an app-specific password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security" from the left sidebar
3. Enable "2-Step Verification" if you haven't already
4. Look for "App passwords" (under "Signing in to Google") and select it
5. Select "Mail" for the app and choose "Other" for the device
6. Name it something memorable like "Portfolio Contact Form"
7. Google will generate a 16-character password
8. Copy this password and use it as the `SMTP_PASSWORD` in your environment variables

## Deployment Configuration

### Vercel Deployment

When deploying to Vercel:

1. In your Vercel project settings, go to the "Environment Variables" section
2. Add all the environment variables listed above
3. Redeploy your application

### Netlify Deployment

When deploying to Netlify:

1. In your Netlify project settings, go to "Build & deploy" > "Environment"
2. Add all the environment variables listed above
3. Redeploy your application

## Testing the Contact Form

After setting up:

1. Fill out the contact form with your name, email, and a test message
2. Submit the form
3. You should see a success message and receive an email at the address specified in `EMAIL_TO`

## Security Considerations

- Never commit your `.env.local` file or any file containing email credentials to your repository
- Your app password should be treated like a regular password - keep it secure
- Consider implementing additional spam protection like reCAPTCHA if you receive a lot of spam

## Troubleshooting

If you're not receiving emails:

1. Check your spam folder
2. Verify your environment variables are correctly set up
3. If using Gmail, ensure that your app password is correct
4. Check for any error messages in your console or deployment logs
