import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export function AboutSection() {
  const skills = [
    { category: "Frontend", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/Sass", "React.js", "Next.js", "Vue.js", "Angular.js", "Redux", "Webpack", "Vite", "Storybook", "Figma (UI/UX)"] },
    { category: "Backend", items: ["Node.js", "Python (Django/Flask)", "C# (.NET Core)", "Express.js", "NestJS", "GraphQL", "WebSocket"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "Redis (caching)"] },
    { category: "Cloud & DevOps", items: ["AWS (Lambda, EC2, S3, RDS)", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD (GitHub Actions, Jenkins, Azure Pipelines)"] },
    { category: "Soft Skills", items: ["Client Communication", "Team Leadership", "Time Management", "Adaptability"] },
    { category: "Languages", items: ["Cantonese (Native)", "English (Professional)"] },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Passionate about building scalable web applications and driving business growth through technology. I love the intersection of clean front-end design and high-performance back-end systems. Currently interested in AI/ML, open source, and lifelong learning.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <Card className="bg-card-gradient border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Senior Full-Stack Developer with 5 years of experience developing scalable web applications. Graduated from the University of Toronto Mississauga (UTM). Expert in JavaScript/TypeScript, React, Node.js, Python, and cloud platforms (AWS/Azure). I value efficiency, innovation, and lifelong learning.
                </p>
                <p>
                  I enjoy solving complex problems, mentoring junior developers, and leading agile teams. Outside of coding, I love hiking, contributing to open source, gaming, and exploring new technology trends.
                </p>
                <p>
                  Based in Mississauga, Ontario, Canada. Open to remote and global opportunities.
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
              <div className="font-bold">Bachelor of Science (B.Sc.) in Computer Science</div>
              <div>University of Toronto Mississauga (UTM) | 09/2015 - 06/2019</div>
              <div>Relevant Coursework: Algorithms, Software Engineering, Database, Web Development.</div>
              <div>Thesis/Project: Developed a ML-based recommendation engine using Python.</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}