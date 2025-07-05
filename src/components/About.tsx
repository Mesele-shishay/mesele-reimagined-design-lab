import { Button } from "@/components/ui/button";
import { Code, Database, Globe, Smartphone, Award, Coffee, Download } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const About = () => {
  const skills = [
    { name: "Frontend", icon: Globe, technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { name: "Backend", icon: Database, technologies: ["Node.js", "Python", "MongoDB", "PostgreSQL"] },
    { name: "Mobile", icon: Smartphone, technologies: ["React Native", "Flutter", "iOS", "Android"] },
    { name: "Tools", icon: Code, technologies: ["Git", "Docker", "AWS", "Vercel"] },
  ];

  const achievements = [
    { icon: Award, title: "Full-Stack Expert", description: "5+ years of experience building scalable applications" },
    { icon: Coffee, title: "Problem Solver", description: "Passionate about solving complex technical challenges" },
    { icon: Globe, title: "Open Source", description: "Active contributor to the developer community" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">&lt; </span>
            <span className="gradient-text">About Me</span>
            <span className="text-accent"> /&gt;</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <div className="space-y-8 animate-fade-up">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30"></div>
                <img 
                  src={profileAvatar} 
                  alt="Mesele Shishay" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                &lt; Who am I /&gt;
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                I'm <span className="text-primary font-semibold">Mesele Shishay</span>, a full-stack developer dedicated to building robust and scalable web applications. I'm passionate about crafting efficient and user-friendly solutions that meet real-world needs.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                I thrive on the challenge of transforming complex ideas into elegant, functional code, and I'm constantly seeking opportunities to learn and grow within the ever-evolving landscape of web development.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Button variant="gradient" size="lg" className="hover-lift">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass rounded-xl p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold">{skill.name}</h4>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center space-x-2 text-foreground-secondary"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="text-center space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto pulse-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold">{achievement.title}</h4>
                <p className="text-foreground-secondary">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;