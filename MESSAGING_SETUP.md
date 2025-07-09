# Messaging Integration Setup

This guide will help you set up Discord, Telegram, and Email messaging for your contact form.

## Discord Setup

1. **Create a Discord Webhook:**
   - Go to your Discord server
   - Right-click on the channel where you want to receive messages
   - Select "Edit Channel" → "Integrations" → "Webhooks"
   - Click "New Webhook"
   - Give it a name (e.g., "Portfolio Contact Form")
   - Copy the webhook URL

2. **Add to Environment Variables:**
   Create a `.env` file in your project root and add:
   ```
   VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
   ```

## Telegram Setup

1. **Create a Telegram Bot:**
   - Open Telegram and search for "@BotFather"
   - Send `/newbot` command
   - Follow the instructions to create your bot
   - Copy the bot token provided

2. **Get Your Chat ID:**
   - Send a message to your bot
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Look for the "chat" object and copy the "id" value

3. **Add to Environment Variables:**
   Add these to your `.env` file:
   ```
   VITE_TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN_HERE
   VITE_TELEGRAM_CHAT_ID=YOUR_CHAT_ID_HERE
   ```

## Email Setup (EmailJS)

1. **Create an EmailJS Account:**
   - Go to [EmailJS](https://www.emailjs.com/) and create an account
   - Add your email service (Gmail, Outlook, etc.)

2. **Create an Email Template:**
   - Go to "Email Templates" in your EmailJS dashboard
   - Create a new template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Copy the template ID

3. **Get Your Service ID and Public Key:**
   - Go to "Email Services" to get your service ID
   - Go to "Account" → "API Keys" to get your public key

4. **Add to Environment Variables:**
   Add these to your `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
   VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
   VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
   ```

## Testing

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Select Discord, Telegram, or Email
4. Submit the form
5. Check your Discord channel, Telegram chat, or email for the message

## Troubleshooting

- **Discord messages not appearing:** Check that the webhook URL is correct and the webhook is still active
- **Telegram messages not appearing:** Verify the bot token and chat ID are correct
- **Email messages not appearing:** Check your EmailJS configuration and email service settings
- **Environment variables not working:** Make sure to restart your development server after adding the `.env` file

## Security Notes

- Never commit your `.env` file to version control
- Keep your webhook URLs, bot tokens, and API keys private
- Consider using a backend service for production deployments to keep tokens secure
- EmailJS public keys are safe to expose in frontend code, but keep service and template IDs private

## Installation

If you choose to use EmailJS, you'll need to install the package:

```bash
npm install @emailjs/browser
``` 