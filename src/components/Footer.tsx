import { Button } from "@/components/ui/button";
import { Code, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo & Tagline */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">Mesele Shishay</span>
            </div>
            <p className="text-foreground-secondary max-w-md">
              Full-stack developer passionate about creating exceptional digital experiences
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-foreground-secondary hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {[
              { name: "GitHub", href: "#" },
              { name: "LinkedIn", href: "#" },
              { name: "Twitter", href: "#" },
              { name: "Resume", href: "#" }
            ].map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                asChild
                className="text-foreground-secondary hover:text-primary"
              >
                <a href={link.href}>{link.name}</a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-foreground-secondary border-t border-border/10 pt-8 w-full">
            <div className="flex items-center space-x-1">
              <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-destructive fill-current" />
              <span>by Mesele Shishay</span>
            </div>
            <div className="hidden md:block">•</div>
            <span>All rights reserved</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="hover-lift"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;