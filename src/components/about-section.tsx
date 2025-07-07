import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export function AboutSection() {
  const skills = [
    { category: "Frontend", items: ["React", "Shopify (Liquid)", "JavaScript/TypeScript", "HTML/CSS", "Vue.js" , "Angular.js"] },
    { category: "Backend", items: ["Python (Django, Flask)", "Node.js", "Express.js", "PHP", "Laravel"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
    { category: "DevOps", items: ["AWS", "Docker", "CI/CD"] },
    { category: "AI/ML", items: ["Recommendation systems", "Data automation"] }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating scalable solutions and driving business growth through technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="bg-card-gradient border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Summary</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Full-Stack Developer specializing in e-commerce (Shopify), scalable web applications, 
                    and AI-driven solutions with 5+ years of experience building high-performance React 
                    frontends and Python/Node.js backends.
                  </p>
                  <p>
                    Expertise in integrating Shopify with custom backends, RESTful APIs, and ERP systems. 
                    Proven track record of boosting revenue, reducing latency, and automating workflows 
                    using data science (AI/ML).
                  </p>
                  <p>
                    Based in Hong Kong, I work with clients globally to deliver exceptional digital 
                    experiences and drive business growth through innovative technology solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
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
      </div>
    </section>
  )
}