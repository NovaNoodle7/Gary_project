import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Remote, Canada",
      period: "May 2024 – Present",
      achievements: [
        "Developed 7+ web apps for healthcare, e-commerce, and SaaS startups using React, Node.js, AWS Lambda, and TypeScript.",
        "Built real-time analytics dashboards (TypeScript + WebSockets) for fintech clients, improving data visibility.",
        "Reduced long-term maintenance costs by 30% through reusable component libraries and CI/CD pipelines.",
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Senior Web Developer – ProServeIT Corporation",
      company: "Mississauga, Canada",
      period: "May 2022 – April 2024",
      achievements: [
        "Scaled Fortune 500 client’s cloud infrastructure (Azure + React), boosting scalability by 50%.",
        "Optimized API/process times by 75% (800ms → 200ms) with Redis caching and query tuning.",
        "Implemented OAuth2.0 and RBAC for compliance, partnering with cybersecurity teams to audit data protection.",
        "Led a team of 4 developers to deliver digital transformation projects on time and within budget."
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Junior Web Developer – CompuVision",
      company: "Canada",
      period: "October 2019 – April 2022",
      achievements: [
        "Refactored monolithic app into microservices, accelerating deployment by 60%.",
        "Migrated legacy PHP systems to AWS serverless, cutting infrastructure costs by 40%.",
        "Automated 15+ internal tools (Vue.js, Django), saving 20+ hours/week in manual workflows.",
        "Reduced production bugs by 35% by automating testing pipelines with Jenkins."
      ],
      color: "from-green-500 to-blue-600"
    }
  ]

  const keyAchievements = [
    {
      title: "Cloud Optimization",
      description: "Scaled Fortune 500 client’s infrastructure, reducing manual processes by 70% (Azure, .NET Core).",
      metric: "-70%",
      color: "text-blue-500"
    },
    {
      title: "API Performance",
      description: "Improved API/process times by 75% (800ms → 200ms) at ProServeIT.",
      metric: "-75%",
      color: "text-green-500"
    },
    {
      title: "Serverless Migration",
      description: "Migrated legacy PHP systems to AWS, cutting infra costs by 40%.",
      metric: "-40%",
      color: "text-purple-500"
    },
    {
      title: "Automation & Productivity",
      description: "Automated 15+ internal tools, saving 20+ hours/week at CompuVision.",
      metric: "+20h/wk",
      color: "text-orange-500"
    },
    {
      title: "Testing Automation",
      description: "Reduced bugs by 35% via Jenkins CI/CD pipelines.",
      metric: "-35%",
      color: "text-yellow-500"
    },
    {
      title: "Team Leadership",
      description: "Led and mentored teams to deliver secure, scalable solutions.",
      metric: "4+ devs",
      color: "text-pink-500"
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