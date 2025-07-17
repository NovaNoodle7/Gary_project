import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Store (Shopify/React)",
      description: "A modern e-commerce store built with React and Shopify, featuring seamless shopping experience and custom UI/UX.",
      tech: ["React.js", "Shopify", "JavaScript", "UI/UX"],
      image: "../public/sites/Screenshot_15.png",
      liveUrl: "https://www.allbirds.com/"
    },
    {
      title: "Python SaaS Platform",
      description: "A scalable SaaS platform for chefs and food businesses, built with Python and modern web technologies.",
      tech: ["Python", "SaaS", "Web App"],
      image: "../public/sites/Screenshot_1.png",
      liveUrl: "https://chefpost.com/"
    },
    {
      title: "WordPress Business Website",
      description: "A professional business website for AV Equipment, built on WordPress with custom design and SEO optimization.",
      tech: ["WordPress", "SEO", "Custom Design"],
      image: "../public/sites/Screenshot_2.png",
      liveUrl: "https://avequipment.com.au/"
    },
    {
      title: "Booking Platform",
      description: "A modern booking platform for flights, built with React and Vercel, featuring real-time availability and secure payments.",
      tech: ["React.js", "Vercel", "Booking", "Payments"],
      image: "../public/sites/Screenshot_3.png",
      liveUrl: "https://flight-work.vercel.app"
    },
    {
      title: "LLM/AI SaaS Platform",
      description: "A next-generation AI platform leveraging LLMs for business automation and insights.",
      tech: ["AI", "LLM", "SaaS"],
      image: "../public/sites/Screenshot_4.png",
      liveUrl: "https://stru.ai"
    },
    {
      title: "Blockchain/Crypto Dashboard",
      description: "A crypto dashboard for NFT and blockchain analytics, built with modern web technologies.",
      tech: ["Blockchain", "Crypto", "Dashboard"],
      image: "../public/sites/Screenshot_5.png",
      liveUrl: "https://game.cryptoland.io/"
    },
    {
      title: "Hyper Healthcare",
      description: "Healthcare services website with appointment booking and patient resources.",
      tech: ["WordPress", "Booking", "Healthcare"],
      image: "../public/sites/Screenshot_6.png",
      liveUrl: "https://www.hyper-healthcare.com/"
    },
    {
      title: "The SBA Shop",
      description: "E-commerce platform for business supplies and accessories.",
      tech: ["WordPress", "E-Commerce", "WooCommerce"],
      image: "../public/sites/Screenshot_7.png",
      liveUrl: "https://thesbashop.com/"
    },
    {
      title: "NOV8 Tech",
      description: "Technology solutions provider with a modern, responsive business site.",
      tech: ["WordPress", "Business", "Responsive Design"],
      image: "../public/sites/Screenshot_8.png",
      liveUrl: "https://nov8.tech/"
    },
    {
      title: "Golden Summit Forest",
      description: "Forestry and environmental services company website.",
      tech: ["WordPress", "Business", "Environmental"],
      image: "../public/sites/Screenshot_9.png",
      liveUrl: "https://goldensummitforest.com/"
    },
    {
      title: "Clean Wash Laundry",
      description: "Laundry service platform with online booking and service management.",
      tech: ["WordPress", "Booking", "Service"],
      image: "../public/sites/Screenshot_10.png",
      liveUrl: "https://cleanwashlaundry.com/"
    },
    {
      title: "Drink Perfy",
      description: "Modern beverage e-commerce store with custom branding and online sales.",
      tech: ["Shopify", "E-Commerce", "Branding"],
      image: "../public/sites/Screenshot_12.png",
      liveUrl: "https://drinkperfy.com/"
    },
    {
      title: "Kokako",
      description: "Coffee roastery and café website with e-commerce and storytelling.",
      tech: ["Shopify", "E-Commerce", "Storytelling"],
      image: "../public/sites/Screenshot_13.png",
      liveUrl: "https://www.kokako.co.nz/"
    },
    {
      title: "Custo",
      description: "SaaS platform for custom business solutions.",
      tech: ["SaaS", "Business", "Web App"],
      image: "../public/sites/Screenshot_14.png",
      liveUrl: "https://custo.io/"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions that drive business growth and technical excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-scale-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-hero-gradient hover:opacity-90 transition-opacity"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}