import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Full-Stack Developer",
      company: "Remote, Canada",
      period: "May 2024 – Present",
      achievements: [
        "Delivered 7+ web applications for clients in healthcare, e-commerce, and SaaS",
        "Built reusable component libraries and CI/CD pipelines, reducing dev cost by 30%",
        "Developed real-time analytics dashboards using TypeScript & WebSockets for fintech client",
        "Migrated legacy PHP system to serverless AWS (Lambda + API Gateway), cutting infrastructure costs by 40%"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Full-Stack Developer",
      company: "ProServeIT Corporation",
      location: "Mississauga, Canada",
      period: "May 2022 – Apr 2024",
      achievements: [
        "Reduced API latency by 70% (800ms → 200ms) via Redis/caching and optimization",
        "Led a team of 4 developers to deliver Fortune 500 digital transformation project",
        "Implemented OAuth 2.0 + RBAC to enhance app-wide data security/compliance",
        "Guided digital transformation and optimization"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Junior Full-Stack Developer",
      company: "CompuVision",
      location: "Canada",
      period: "October 2019 – April 2022",
      achievements: [
        "Refactored monolithic app into microservices, speeding deployment by 60%",
        "Automated testing with Jenkins, reducing production bugs by 35%",
        "Built and maintained 15+ tools using Vue, Django, and Docker (reduced manual workload by 20+ hours/week)",
        "Worked with SMEs to turn business requirements into deployable software"
      ],
      color: "from-green-500 to-blue-600"
    }
  ]

  const keyAchievements = [
    {
      title: "Performance & Optimization",
      description: "Reduced API Latency by 70% at ProServeIT by implementing Redis caching and query optimization, saving $50K+ in cloud costs annually.",
      metric: "-70%",
      color: "text-blue-500"
    },
    {
      title: "App Load Times",
      description: "Improved App Load Times by 40% for 3+ freelance clients through code-splitting (React) and CDN integration.",
      metric: "-40%",
      color: "text-green-500"
    },
    {
      title: "Project Leadership",
      description: "Led Digital Transformation for Fortune 500 client at ProServeIT, migrating legacy systems to cloud native architecture (Azure + .NET Core), reducing operational costs by 35%.",
      metric: "-35%",
      color: "text-purple-500"
    },
    {
      title: "Mentorship & Productivity",
      description: "Mentored 5 Junior Developers across roles, improving team productivity by 25% through paired programming and Agile coaching.",
      metric: "+25%",
      color: "text-orange-500"
    },
    {
      title: "Innovation & Problem Solving",
      description: "Built Real-Time Analytics Dashboard (TypeScript/WebSockets) for fintech client, increasing user engagement by 50%.",
      metric: "+50%",
      color: "text-pink-500"
    },
    {
      title: "Testing Automation",
      description: "Automated Testing Pipelines at CompuVision, cutting bug reports by 35% and accelerating releases by 2x.",
      metric: "-35%",
      color: "text-yellow-500"
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="bg-hero-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of growth, innovation, and impactful contributions to the tech industry
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                <div className="ml-20">
                  <Card className="bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                          <p className="text-lg text-muted-foreground">
                            {exp.company} {exp.location && `• ${exp.location}`}
                          </p>
                        </div>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                          {exp.period}
                        </span>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2 mt-1.5">•</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center mb-12">
            Key <span className="bg-hero-gradient bg-clip-text text-transparent">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyAchievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 ${achievement.color}`}>
                    {achievement.metric}
                  </div>
                  <h4 className="font-semibold text-primary mb-3">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}