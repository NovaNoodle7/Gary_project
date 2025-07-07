import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Download } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const downloadResume = () => {
    // Create resume content
    const resumeContent = `
GARY LEE
Full-Stack Developer | Hong Kong

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
          Gary Lee
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Reviews
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            onClick={downloadResume}
            className="hidden sm:flex items-center space-x-2 bg-hero-gradient hover:opacity-90 transition-opacity"
          >
            <Download className="h-4 w-4" />
            <span>Resume</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}