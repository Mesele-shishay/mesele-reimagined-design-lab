import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background-secondary/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-accent/70 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center space-y-8 animate-fade-up">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-lg text-foreground-secondary animate-fade-down" style={{ animationDelay: '0.2s' }}>
              Hello 👋, I'm
            </p>
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="gradient-text">Mesele</span>
              <br />
              <span className="text-foreground">Shishay</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed">
              <span className="text-primary font-semibold"># </span>
              Full-stack developer crafting scalable web applications with modern JavaScript technologies.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="gradient" 
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="hover-lift"
            >
              <Briefcase className="w-5 h-5" />
              See My Work
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="hover-lift"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Mail className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Download className="w-5 h-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => scrollToSection('about')}
              className="rounded-full"
            >
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Code Window */}
      <div className="absolute top-20 right-8 hidden lg:block animate-fade-down" style={{ animationDelay: '1s' }}>
        <div className="glass rounded-lg p-6 w-80 border">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-foreground-secondary ml-2">portfolio.tsx</span>
          </div>
          <div className="space-y-2 text-sm font-mono">
            <div className="text-muted-foreground">
              <span className="text-blue-400">1</span> <span className="text-gray-500">// Welcome to my Portfolio! 🚀</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-blue-400">2</span> <span className="text-purple-400">import</span> <span className="text-yellow-400">{'{'}</span> <span className="text-blue-300">Developer</span> <span className="text-yellow-400">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'./mesele'</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-blue-400">3</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-blue-400">4</span> <span className="text-purple-400">const</span> <span className="text-blue-300">skills</span> <span className="text-yellow-400">=</span> <span className="text-yellow-400">[</span>
            </div>
            <div className="text-muted-foreground pl-4">
              <span className="text-blue-400">5</span> <span className="text-green-400">'React'</span><span className="text-yellow-400">,</span> <span className="text-green-400">'Node.js'</span><span className="text-yellow-400">,</span>
            </div>
            <div className="text-muted-foreground pl-4">
              <span className="text-blue-400">6</span> <span className="text-green-400">'TypeScript'</span><span className="text-yellow-400">,</span> <span className="text-green-400">'Python'</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-blue-400">7</span> <span className="text-yellow-400">]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;