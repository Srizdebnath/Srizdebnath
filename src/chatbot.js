// src/chatbot.js

// This script initializes the Mindflare chatbot SDK.
// It expects the Mindflare SDK to be loaded globally via a script tag (e.g., from CDN).
// It also expects environment variables (MINDFLARE_APP_ID, MINDFLARE_API_KEY, MINDFLARE_CLIENT_SECRET)
// to be made available to the client-side JavaScript, typically via a build process
// (like Webpack, Vite, Next.js) or server-side injection.

if (typeof Mindflare !== 'undefined') {
  // Retrieve credentials from environment variables.
  // In a client-side environment without a bundler, `process.env` will be undefined.
  // For a plain HTML/JS setup, you would need to manually replace these placeholders
  // with actual values, or inject them dynamically from your server.
  const appId = process.env.MINDFLARE_APP_ID;
  const apiKey = process.env.MINDFLARE_API_KEY;
  const clientSecret = process.env.MINDFLARE_CLIENT_SECRET;

  // Validate that all required credentials are provided.
  if (!appId || !apiKey || !clientSecret) {
    console.error(
      'Mindflare Chatbot: Failed to initialize. Missing one or more required environment variables.\n' +
      'Please ensure MINDFLARE_APP_ID, MINDFLARE_API_KEY, and MINDFLARE_CLIENT_SECRET are set \n' +
      'and correctly exposed to your client-side JavaScript.'
    );
    // Prevent further execution if critical credentials are missing
    return;
  }

  // Initialize the Mindflare chatbot.
  const chatbot = new Mindflare({
    appId: appId,
    apiKey: apiKey,
    clientSecret: clientSecret,
    // --- Optional Configuration Options --- //
    // You can customize the chatbot's appearance and behavior here.
    // Example: change the position of the chat bubble.
    // position: 'bottom-right', // Other options: 'bottom-left', 'top-right', 'top-left'
    // Example: set a custom icon for the chat bubble.
    // bubbleIcon: 'https://your-domain.com/path/to/custom-icon.png',
    // Example: set the chatbot theme.
    // theme: 'dark', // Or 'light'
    // Example: provide a custom welcome message.
    // welcomeMessage: 'Welcome to our support! How can I assist you today?',
    // Example: inject custom CSS for advanced styling.
    // customCss: `
    //   .mindflare-chat-widget {
    //     border-radius: 15px;
    //     box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    //   }
    // `,
    // Add any other specific configurations required by the Mindflare SDK.
  });

  // Start the chatbot.
  chatbot.init();

  console.log('Mindflare Chatbot initialized successfully.');
  console.log('Mindflare App ID (first 8 chars):', appId.substring(0, 8) + '...');

} else {
  console.error(
    'Mindflare SDK not found. Please ensure the Mindflare SDK script is correctly included \n' +
    'in your HTML (`index.html`) before `src/chatbot.js` and that `Mindflare` is globally accessible.'
  );
}
