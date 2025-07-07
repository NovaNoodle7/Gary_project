import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "Krypto Buzz",
      description: "KryptoBuzz is a website that helps you transfer the Ethereum from one wallet to another wallet. with the help of metamask you can carryout the successfull transaction.",
      tech: ["React", "Socket", "Express", "Html5", "Css3", "Material-UI", "Javascript"],
      image: "https://i.ibb.co/6r42XGx/Kryptobuzz.png",
      liveUrl: "https://kryptobuzzbypooran.netlify.app/",
    },
    {
      title: "Chess Multiplayer",
      description: " Chess Multiplayer is a website where you can play chess with your loved ones that are in any part of the world just by sharing a simple link. Also you can chat while playing chess.",
      tech: ["React", "Socketdot", "Express", "HTML5", "CSS3", "Material-UI", "Javascript"],
      image: "https://i.ibb.co/Gddr29J/chess-multiplayer.png",
      liveUrl: "https://chessmultiplayer.netlify.app/",
    },
    {
      title: "Sudoku Solver",
      description: "Sudoku Solver is a Website that gives you the Solution of EverySudoko Problem that you input and also you can visualize each step of how the sudoku is getting solved.",
      tech: ["React", "HTML5", "Javascript", "Json", "CSS3", "Material-UI"],
      image: "https://i.ibb.co/GRmXtzD/Sudoku.png",
      liveUrl: "https://csb-ks3rf.netlify.app/",
    },
    {
      title: "Chat Application",
      description: "Chat-application is an website where you can have live chatting with your loved ones and you can create your own custom room according to the requirement.",
      tech: ["React", "HTML5", "Socket", "CSS3", "Express", "React-Router", "Javascript"],
      image: "https://i.ibb.co/CJbbtVf/chat-application.png",
      liveUrl: "https://chat-app-web-socket.netlify.app/",
    },
    {
      title: "CovidTracker(India)",
      description: "Covid Tracker is website that shows you the complete data of the Covid-19 Cases of Every State distributed in three sections Active, Recovered and Deaths.",
      tech: ["React", "HTML5", "CSS3", "Mertrial-UI", "Javascript", "Json"],
      image: "https://i.ibb.co/mFHC9kk/covidtracker.png",
      liveUrl: "https://covid-19-tracker-indiabypooran.netlify.app/",
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