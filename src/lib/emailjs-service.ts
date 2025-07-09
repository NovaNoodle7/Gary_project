interface ContactMessage {
  name: string;
  email: string;
  message: string;
  method: 'discord' | 'telegram' | 'email';
}

// EmailJS Configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export class EmailJSService {
  static async sendEmail(message: ContactMessage): Promise<{ success: boolean; error?: string }> {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      return {
        success: false,
        error: 'EmailJS configuration is missing. Please check your environment variables.'
      };
    }

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

    try {
      // Dynamically import EmailJS to avoid bundle size issues if not used
      const { default: emailjs } = await import('@emailjs/browser');
      
      const templateParams = {
        from_name: message.name.trim(),
        from_email: message.email.trim(),
        message: message.message.trim(),
        to_name: 'Gary Lee',
        reply_to: message.email.trim()
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        return { success: true };
      } else {
        console.error('EmailJS error:', result);
        return { 
          success: false, 
          error: `Email service returned status: ${result.status}` 
        };
      }
    } catch (error) {
      console.error('Error sending email via EmailJS:', error);
      return {
        success: false,
        error: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }
} 