import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Shopify (Remote/Toronto, ON)",
      period: "2021 – Present",
      achievements: [
        "Led development of high-scale merchant tools using React, Node.js, and GraphQL, improving dashboard performance by 45% for 1M+ businesses.",
        "Architected a microservices-based checkout extension (Ruby on Rails, Kubernetes), processing $20M+ monthly transactions with 99.99% uptime.",
        "Mentored 3 junior developers; introduced automated testing (Jest/Selenium), reducing production bugs by 35%."
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Full-Stack Developer",
      company: "RBC (Royal Bank of Canada), Toronto, ON",
      period: "2019 – 2021",
      achievements: [
        "Built real-time fraud detection APIs (Java/Spring Boot, PostgreSQL) reducing false positives by 30%, saving $2M/year in manual reviews.",
        "Modernized legacy online banking UI (Angular/TypeScript), achieving WCAG 2.1 AA compliance and improving accessibility scores by 50%.",
        "Automated CI/CD pipelines (Jenkins/Docker), cutting deployment time by 60%."
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Software Engineer",
      company: "Telus Digital, Mississauga, ON",
      period: "2017 – 2019",
      achievements: [
        "Developed customer self-service portals (React, Node.js, AWS Lambda), reducing call center volume by 25%.",
        "Optimized mobile checkout flow, increasing conversion rates by 15% (measured via A/B testing).",
        "Won ‘Innovation Award’ for prototyping an AI chatbot (Python/NLP) handling 10K+ monthly queries."
      ],
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Web Developer Intern",
      company: "FreshBooks, Toronto, ON",
      period: "2016",
      achievements: [
        "Redesigned invoice automation tools (PHP/jQuery → React), cutting processing time by 40%.",
        "Contributed to REST API migration (Laravel to Node.js), improving response times by 200ms."
      ],
      color: "from-yellow-500 to-green-500"
    }
  ]

  const keyAchievements = [
    {
      title: "Dashboard Performance",
      description: "Improved Shopify merchant dashboard performance by 45% for 1M+ businesses.",
      metric: "+45%",
      color: "text-blue-500"
    },
    {
      title: "Microservices Uptime",
      description: "Architected checkout extension processing $20M+/mo with 99.99% uptime.",
      metric: "99.99%",
      color: "text-green-500"
    },
    {
      title: "Fraud Detection Savings",
      description: "Reduced false positives by 30%, saving $2M/year at RBC.",
      metric: "-$2M/yr",
      color: "text-purple-500"
    },
    {
      title: "Accessibility Champion",
      description: "Achieved WCAG 2.1 AA compliance, improving accessibility by 50%.",
      metric: "+50%",
      color: "text-orange-500"
    },
    {
      title: "CI/CD Automation",
      description: "Cut deployment time by 60% via Jenkins/Docker automation.",
      metric: "-60%",
      color: "text-yellow-500"
    },
    {
      title: "AI Chatbot Innovation",
      description: "Prototyped AI chatbot handling 10K+ monthly queries (Telus Digital).",
      metric: "+10K/mo",
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