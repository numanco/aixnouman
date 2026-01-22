import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Youtube, MessageCircle, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MyReelGen",
      description: "AI SaaS for reel & short-form content generation. Automated video creation at scale.",
      link: "https://myreelgen.com",
      icon: Sparkles,
      tags: ["AI", "SaaS", "Video"],
      gradient: "from-primary/20 to-cyan-500/20",
    },
    {
      title: "YouTube Automation System",
      description: "n8n-based automated YouTube workflows for hands-off content publishing.",
      link: "https://www.youtube.com/@QuickKitchenLabFood",
      icon: Youtube,
      tags: ["n8n", "YouTube", "Automation"],
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      title: "Agently – WhatsApp AI Agent",
      description: "AI-powered WhatsApp automation platform for intelligent customer interactions.",
      link: "https://agently.evalinfo.com",
      icon: MessageCircle,
      tags: ["AI Agent", "WhatsApp", "Automation"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "@aixnouman Brand",
      description: "Face-based + AI-generated content across TikTok, Instagram, YouTube, and more.",
      link: "https://tiktok.com/@aixnouman",
      icon: Users,
      tags: ["Social Media", "AI Content", "Brand"],
      gradient: "from-pink-500/20 to-violet-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Live Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real systems running in production, delivering measurable results.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${project.gradient} border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full`}>
                  {/* Card Content */}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-background/50 backdrop-blur flex items-center justify-center">
                        <project.icon className="w-7 h-7 text-primary" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-background/50 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
