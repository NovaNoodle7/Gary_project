import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function HeroSection() {
  const downloadResume = () => {
    const resumeContent = `
GARY LEE
Full-Stack Developer | Hong Kong
Email: gary.lee@example.com | Phone: +852 XXXX XXXX

PROFESSIONAL SUMMARY
Full-Stack Developer specializing in e-commerce (Shopify), scalable web applications, and AI-driven solutions.
5+ years of experience building high-performance React frontends and Python/Node.js backends.
Expertise in integrating Shopify with custom backends, RESTful APIs, and ERP systems.
Proven track record of boosting revenue, reducing latency, and automating workflows using data science (AI/ML).

TECHNICAL SKILLS
Frontend: React, Shopify (Liquid), JavaScript/TypeScript, HTML/CSS
Backend: Python (Django, Flask), Node.js, Express.js
Databases: PostgreSQL, MongoDB
DevOps: AWS, Docker, CI/CD
AI/ML: Recommendation systems, data automation

PROFESSIONAL EXPERIENCE

Freelance Full-Stack Developer | Remote | Jan 2023 – Present
• Developed custom Shopify stores with integrated Python/Node.js backends, improving scalability for 10+ clients.
• Built real-time analytics dashboards (React + Python APIs) to track KPIs, leading to data-driven decision-making.
• Deployed Node.js microservices for payment processing and inventory management, reducing checkout errors by 20%.

Full-Stack Developer | TechNova Ltd | Central District, Hong Kong | Jan 2021 – Dec 2022
• Led migration of legacy systems to React + Django, improving page load speed by 35%.
• Designed RESTful APIs to sync Shopify stores with ERP systems, eliminating manual data entry.
• Implemented JWT authentication for customer portals, enhancing security and reducing fraud incidents.

Junior Web Developer | SmartDigital Studio | Hong Kong | Jan 2020 – Dec 2020
• Contributed to MERN stack applications, optimizing frontend performance by 25%.
• Automated data processing using Python scripts, saving 15+ hours/month for the team.

KEY ACHIEVEMENTS
• Revenue Growth: Developed a Shopify AI recommender system (Python + React) that increased average order value by 30%.
• Performance Optimization: Reduced API latency by 40% by refactoring Node.js microservices for a high-traffic e-commerce platform.
• UX Improvement: Decreased cart abandonment by 25% by revamping checkout flows (Shopify Liquid + React).
• Process Automation: Built a Python inventory script that saved 15+ hours/month in manual reporting.
    `

    const blob = new Blob([resumeContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Gary_Lee_Resume.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Gary Lee
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full-Stack Developer from Hong Kong
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Specializing in e-commerce (Shopify), scalable web applications, and AI-driven solutions.
            5+ years building high-performance React frontends and Python/Node.js backends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-hero-gradient hover:opacity-90 transition-all hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 hover:scale-105 transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
        
        {/* Floating animation element */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  )
}