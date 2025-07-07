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
    // Trigger download of the PDF file in the public directory
    const a = document.createElement('a')
    a.href = '/full.pdf'
    a.download = 'Gary_Lee_Resume.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
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