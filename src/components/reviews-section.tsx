import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "E-commerce Director",
      company: "TechMart Solutions",
      rating: 5,
      review: "Gary transformed our Shopify store with his custom Python backend integration. The real-time analytics dashboard he built has been instrumental in our 40% revenue increase. Outstanding technical expertise and project management.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      location: "Singapore"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "RetailFlow Inc",
      rating: 5,
      review: "Working with Gary was exceptional. He delivered a complex microservices architecture that reduced our API latency by 40% and eliminated our scaling issues. His expertise in Node.js and AWS is top-notch.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
      location: "United States"
    },
    {
      name: "Emily Wong",
      role: "Product Manager",
      company: "InnovateTech HK",
      rating: 5,
      review: "Gary's AI recommendation system increased our average order value by 30%. His ability to blend machine learning with practical e-commerce solutions is remarkable. Highly professional and results-driven.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      location: "Hong Kong"
    },
    {
      name: "James Thompson",
      role: "Lead Developer",
      company: "DigitalCraft Studios",
      rating: 5,
      review: "Gary's React optimization work improved our page load speed by 35%. His systematic approach to performance enhancement and attention to detail is impressive. Great communication throughout the project.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "Australia"
    },
    {
      name: "Lisa Zhang",
      role: "Operations Manager", 
      company: "SmartCommerce Ltd",
      rating: 5,
      review: "The Python automation scripts Gary developed save us 15+ hours monthly. His ERP-Shopify integration eliminated manual data entry completely. Exceptional problem-solving skills and reliable delivery.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      location: "Canada"
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "NextGen E-commerce",
      rating: 5,
      review: "Gary built our complete tech stack from scratch - React frontend, Node.js backend, and AWS deployment. The checkout flow optimization reduced cart abandonment by 25%. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      location: "South Korea"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Client <span className="bg-hero-gradient bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by clients worldwide for delivering exceptional results and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <p className="text-xs text-muted-foreground">{review.company} • {review.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}