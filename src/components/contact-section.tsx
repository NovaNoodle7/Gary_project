import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessagingService } from "@/lib/messaging-service"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const result = await MessagingService.sendMessage({
        name,
        email,
        message,
        method: 'discord'
      });

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: `Message sent successfully via Discord!`
        })
        // Reset form
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
      <p className="mb-8 text-center text-muted-foreground">Send me a message and it will be delivered to my Discord!</p>
      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg shadow">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <Input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <Input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            placeholder="you@email.com"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <Textarea 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            required 
            placeholder="Type your message..." 
            rows={4}
            disabled={isSubmitting}
          />
        </div>
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        {submitStatus.type && (
          <div className={`text-center mt-2 p-3 rounded ${
            submitStatus.type === 'success' 
              ? 'text-green-600 bg-green-50 dark:bg-green-900/20' 
              : 'text-red-600 bg-red-50 dark:bg-red-900/20'
          }`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </section>
  )
} 