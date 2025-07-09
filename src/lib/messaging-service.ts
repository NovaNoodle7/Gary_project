interface ContactMessage {
  name: string;
  email: string;
  message: string;
  method: 'discord' | 'telegram';
}

// Discord Webhook URL - Replace with your actual webhook URL
const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL || '';

// Telegram Bot Token and Chat ID - Replace with your actual values
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';

export class MessagingService {
  static async sendToDiscord(message: ContactMessage): Promise<boolean> {
    if (!DISCORD_WEBHOOK_URL) {
      console.error('Discord webhook URL not configured');
      return false;
    }

    if (!message.name || !message.email || !message.message) {
      console.error('Missing required message fields');
      return false;
    }

    try {
      const embed = {
        title: 'New Contact Message',
        color: 0x00ff00,
        fields: [
          {
            name: 'Name',
            value: message.name,
            inline: true
          },
          {
            name: 'Email',
            value: message.email,
            inline: true
          },
          {
            name: 'Message',
            value: message.message.length > 1024 ? message.message.substring(0, 1021) + '...' : message.message,
            inline: false
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: 'Portfolio Contact Form'
        }
      };

      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed]
        })
      });

      if (!response.ok) {
        console.error('Discord webhook response not ok:', response.status, response.statusText);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error sending to Discord:', error);
      return false;
    }
  }

  static async sendToTelegram(message: ContactMessage): Promise<boolean> {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram bot token or chat ID not configured');
      return false;
    }

    if (!message.name || !message.email || !message.message) {
      console.error('Missing required message fields');
      return false;
    }

    try {
      const text = `*New Contact Message*\n\n*Name:* ${message.name}\n*Email:* ${message.email}\n*Message:* ${message.message}`;
      
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        })
      });

      const result = await response.json();
      
      if (!result.ok) {
        console.error('Telegram API error:', result);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  }

  static async sendMessage(message: ContactMessage): Promise<{ success: boolean; error?: string }> {
    try {
      // Validate input
      if (!message.name?.trim()) {
        return { success: false, error: 'Name is required' };
      }
      if (!message.email?.trim()) {
        return { success: false, error: 'Email is required' };
      }
      if (!message.message?.trim()) {
        return { success: false, error: 'Message is required' };
      }

      let success = false;
      
      if (message.method === 'discord') {
        success = await this.sendToDiscord(message);
      } else if (message.method === 'telegram') {
        success = await this.sendToTelegram(message);
      } else {
        return { success: false, error: 'Invalid messaging method' };
      }

      if (!success) {
        return {
          success: false,
          error: `Failed to send message via ${message.method}. Please check your configuration.`
        };
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: `An error occurred while sending the message: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }
} 