import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { User, Code, Cloud, Database, Zap, Languages, GraduationCap, Sparkles, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutSection() {
  const skills = [
    { category: "Frontend", icon: <Code className="inline w-5 h-5 mr-2 text-primary" />, items: ["React", "Next.js", "Vue.js", "TypeScript", "Redux", "Storybook"] },
    { category: "Backend", icon: <Zap className="inline w-5 h-5 mr-2 text-primary" />, items: ["Node.js", "Python (Django)", ".NET Core", "REST/GraphQL APIs"] },
    { category: "Cloud & DevOps", icon: <Cloud className="inline w-5 h-5 mr-2 text-primary" />, items: ["AWS (Lambda, S3, API Gateway)", "Azure", "Docker", "Kubernetes", "Terraform"] },
    { category: "Databases", icon: <Database className="inline w-5 h-5 mr-2 text-primary" />, items: ["PostgreSQL", "MongoDB", "Redis"] },
    { category: "Other", icon: <Sparkles className="inline w-5 h-5 mr-2 text-primary" />, items: ["Jenkins", "Microservices", "CI/CD", "Technical Communication"] },
    { category: "Languages", icon: <Languages className="inline w-5 h-5 mr-2 text-primary" />, items: ["English (Professional Proficiency)"] },
  ]

  return (
    <motion.section
      id="about"
      className="py-20 bg-muted/30"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="flex flex-col items-center mb-4">
          <Quote className="w-6 h-6 text-primary mb-2" />
          <span className="italic text-lg text-primary font-medium max-w-xl">
            "Turning complex ideas into elegant, scalable digital solutions."
          </span>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          I’m a results-driven Senior Web Developer with a passion for building scalable, high-performance web applications. My expertise spans React, Node.js, AWS, and modern cloud architecture. I thrive on solving complex problems, optimizing digital workflows, and collaborating with teams to deliver business value.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <Card className="bg-card-gradient border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center"><User className="w-6 h-6 mr-2 text-primary" /> Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I specialize in crafting robust, user-focused web solutions that drive efficiency and growth. My experience covers everything from cloud migrations to API optimization and CI/CD automation.
                </p>
                <p>
                  I enjoy mentoring, leading technical discussions, and staying ahead of industry trends—especially in AI/ML and cloud technologies.
                </p>
                <p>
                  Based in Mississauga, Canada. Open to remote and global opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center"><Sparkles className="w-6 h-6 mr-2 text-primary" /> Technical & Soft Skills</h3>
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
                <Card className="bg-card-gradient border-0 shadow-md hover:shadow-lg transition-all hover:scale-105 animate-fade-in-up">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-3 flex items-center">{skill.icon}{skill.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors duration-200 shadow-sm"
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
      <div className="grid lg:grid-cols-2 items-center">
        <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up">
          <Card className="bg-card-gradient border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center"><GraduationCap className="w-6 h-6 mr-2 text-primary" /> Education</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="font-bold">Bachelor of Science in Computer Science</div>
                <div>University of Toronto Mississauga (UTM), Canada | 2015 – 2019</div>
                <div>Capstone: ML-based recommendation engine in Python. Hands-on AWS cloud architecture experience.</div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up">
          <Card className="bg-card-gradient border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center"><Sparkles className="w-6 h-6 mr-2 text-primary" /> Interests & Hobbies</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary" /> AI/ML in web apps</div>
                <div className="flex items-center gap-2"><Cloud className="w-5 h-5 text-primary" /> Cloud optimization</div>
                <div className="flex items-center gap-2"><User className="w-5 h-5 text-primary" /> Mentoring</div>
                <div className="flex items-center gap-2"><Code className="w-5 h-5 text-primary" /> Open-source</div>
                <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-primary" /> Football</div>
                <div className="flex items-center gap-2"><Database className="w-5 h-5 text-primary" /> Fintech</div>
                <div className="flex items-center gap-2"><Languages className="w-5 h-5 text-primary" /> Global tech meetups</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}