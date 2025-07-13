import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function HeroSection() {
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-hero-gradient bg-clip-text text-transparent">
            Austin Rider
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Senior Full-Stack Developer | Web Specialist — Mississauga, Ontario, Canada
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate full-stack developer with 5 years of experience building scalable web applications. Expert in JavaScript/TypeScript, React, Node.js, Python, and cloud platforms (AWS/Azure). I love the intersection of clean front-end design and high-performance back-end systems. Currently interested in AI/ML and open source. Let’s build something impactful together!
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
            onClick={() => {
              window.open('./public/resume.pdf', '_blank');
            }}
            variant="secondary"
            size="lg"
            className="flex items-center space-x-2 hover:scale-105 transition-all"
          >
            <span>View Resume</span>
          </Button>
        </div>
      </div>
      {/* Floating animation element */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '1s'}}></div>
    </section>
  )
}