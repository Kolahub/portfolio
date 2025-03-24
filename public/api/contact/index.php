<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only handle POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get the posted data
$data = json_decode(file_get_contents('php://input'), true);

// Validate the data
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

// Check for honeypot field
if (isset($data['website']) && !empty($data['website'])) {
    // Silently succeed to fool bots
    echo json_encode(['message' => 'Message sent successfully']);
    exit();
}

// Basic validation
$name = filter_var($data['name'], FILTER_SANITIZE_STRING);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$subject = isset($data['subject']) ? filter_var($data['subject'], FILTER_SANITIZE_STRING) : 'New Contact Form Submission';
$message = filter_var($data['message'], FILTER_SANITIZE_STRING);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Your email address where you want to receive messages
$to = 'your-email@example.com'; // CHANGE THIS TO YOUR EMAIL

// Prepare email
$email_subject = "Contact Form: $subject";
$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n";

$headers = "From: $email\n";
$headers .= "Reply-To: $email\n";

// For now, we'll just simulate success
// In a real environment, you would use mail() function to send the email
// mail($to, $email_subject, $email_body, $headers);

// For demonstration purposes
sleep(1); // Simulate network delay

// Return success response
echo json_encode(['message' => 'Your message has been sent successfully! We\'ll get back to you soon.']); 