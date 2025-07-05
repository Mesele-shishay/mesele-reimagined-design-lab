import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "photo-1460925895917-afdab827c52f",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, file sharing, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      image: "photo-1461749280684-dccba630e2f6",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      technologies: ["React", "D3.js", "Weather API", "Mapbox", "Chart.js"],
      image: "photo-1518770660439-4636190af475",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform for social media managers with real-time metrics and automated reporting.",
      technologies: ["Python", "Django", "React", "Redis", "Celery"],
      image: "photo-1487058792275-0ad4aaf24ca7",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">&lt; </span>
            <span className="gradient-text">Projects</span>
            <span className="text-accent"> /&gt;</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.title} className="glass rounded-2xl overflow-hidden animate-scale-in">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="gradient" className="hover-lift">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="hover-lift">
                      <Github className="w-4 h-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-xl overflow-hidden group hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?w=600&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex space-x-3">
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="hover-lift">
            View More Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
