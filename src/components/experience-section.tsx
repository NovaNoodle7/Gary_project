import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Full-Stack Developer",
      company: "Remote",
      period: "Jan 2023 – Present",
      achievements: [
        "Developed custom Shopify stores with integrated Python/Node.js backends, improving scalability for 10+ clients",
        "Built real-time analytics dashboards (React + Python APIs) to track KPIs, leading to data-driven decision-making",
        "Deployed Node.js microservices for payment processing and inventory management, reducing checkout errors by 20%"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Full-Stack Developer",
      company: "TechNova Ltd",
      location: "Central District, Hong Kong",
      period: "Jan 2021 – Dec 2022",
      achievements: [
        "Led migration of legacy systems to React + Django, improving page load speed by 35%",
        "Designed RESTful APIs to sync Shopify stores with ERP systems, eliminating manual data entry",
        "Implemented JWT authentication for customer portals, enhancing security and reducing fraud incidents"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Junior Web Developer", 
      company: "SmartDigital Studio",
      location: "Hong Kong",
      period: "Jan 2020 – Dec 2020",
      achievements: [
        "Contributed to MERN stack applications, optimizing frontend performance by 25%",
        "Automated data processing using Python scripts, saving 15+ hours/month for the team"
      ],
      color: "from-green-500 to-blue-600"
    }
  ]

  const keyAchievements = [
    {
      title: "Revenue Growth",
      description: "Developed a Shopify AI recommender system (Python + React) that increased average order value by 30%",
      metric: "+30%",
      color: "text-green-500"
    },
    {
      title: "Performance Optimization", 
      description: "Reduced API latency by 40% by refactoring Node.js microservices for a high-traffic e-commerce platform",
      metric: "-40%",
      color: "text-blue-500"
    },
    {
      title: "UX Improvement",
      description: "Decreased cart abandonment by 25% by revamping checkout flows (Shopify Liquid + React)", 
      metric: "-25%",
      color: "text-purple-500"
    },
    {
      title: "Process Automation",
      description: "Built a Python inventory script that saved 15+ hours/month in manual reporting",
      metric: "15+ hrs/mo",
      color: "text-orange-500"
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