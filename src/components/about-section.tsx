import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export function AboutSection() {
  const skills = [
    { category: "Frontend Development", items: ["React.js", "Next.js", "Vue.js", "Angular.js", "TypeScript (ES6+)", "HTML5", "CSS3", "Sass", "Redux", "Webpack", "Vite", "Storybook"] },
    { category: "Backend Development", items: ["Node.js (Django, Flask)", ".NET Core (C#)", "Express.js", "REST", "GraphQL", "WebSockets"] },
    { category: "Cloud & DevOps", items: ["AWS (Lambda, EC2, S3, RDS)", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Azure Pipelines"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "Redis"] },
    { category: "Soft Skills", items: ["Client Communication", "Team Leadership", "Technical Mentorship", "Agile Delivery", "Time Management", "Rapid Stack Switch"] },
    { category: "Languages", items: ["Cantonese (Native)", "English (Professional)"] },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Senior Full-Stack Developer with 5 years of experience building scalable web applications using React, Node.js, and Python. Delivered enterprise-grade solutions across cloud platforms (AWS/Azure), achieving a 70% reduction in latency, 35% fewer bugs (through CI/CD automation), and a 50%+ increase in deployment speed via microservice refactoring. Experienced in leading client-facing teams, classifying consulting, and mentoring junior developers. Passionate about clean architecture, performance optimization, and exploring AI/ML technologies.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <Card className="bg-card-gradient border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Senior Full-Stack Developer with 5 years of experience building scalable web applications using React, Node.js, and Python. Delivered enterprise-grade solutions across cloud platforms (AWS/Azure), achieving a 70% reduction in latency, 35% fewer bugs (through CI/CD automation), and a 50%+ increase in deployment speed via microservice refactoring.
                </p>
                <p>
                  Experienced in leading client-facing teams, classifying consulting, and mentoring junior developers. Passionate about clean architecture, performance optimization, and exploring AI/ML technologies.
                </p>
                <p>
                  Based in Mississauga (Ontario), Canada. Open to remote and global opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical & Soft Skills</h3>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="skills-swiper mb-8"
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill.category}>
                <Card className="bg-card-gradient border-0 shadow-md hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-3">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Education Section */}
      <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up">
        <Card className="bg-card-gradient border-0 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="font-bold">Bachelor of Science in Computer Science</div>
              <div>University of Toronto Mississauga (UTM), Canada | September 2015 – June 2019</div>
              <div>Relevant Coursework: Algorithms, Software Engineering, Web Development</div>
              <div>Capstone Project: Built ML-based recommendation engine in Python</div>
              <div>Gained hands-on experience with AWS cloud architecture and deployment via academic AWS labs</div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Interests Section */}
      <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up">
        <Card className="bg-card-gradient border-0 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Interests</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>Cloud & AI/ML integration in web development, optimizing cloud infrastructure for cost/performance balance, and mentoring junior developers. Outside of work: hiking, open source, gaming, and reading research papers/books to forecast tech trends.</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}