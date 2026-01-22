import { 
  Sparkles, 
  Video, 
  Workflow, 
  MessageCircle, 
  Youtube, 
  Code2, 
  Server, 
  Globe 
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Sparkles,
      title: "AI Content Creation",
      description: "Face-based + AI-generated content across multiple platforms",
    },
    {
      icon: Video,
      title: "Short-Form Video",
      description: "Reels, Shorts, TikTok content optimized for engagement",
    },
    {
      icon: Workflow,
      title: "Advanced n8n Automation",
      description: "Complex automation workflows for business processes",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp AI Agents",
      description: "Intelligent chatbots and automation for WhatsApp",
    },
    {
      icon: Youtube,
      title: "YouTube Automation",
      description: "End-to-end automated YouTube content systems",
    },
    {
      icon: Code2,
      title: "SaaS Development",
      description: "Building scalable software-as-a-service products",
    },
    {
      icon: Server,
      title: "Ubuntu Server Management",
      description: "Linux server setup, deployment, and maintenance",
    },
    {
      icon: Globe,
      title: "WordPress Hosting",
      description: "WordPress deployment and hosting solutions",
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Skills & Tech Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A focused toolkit for building AI systems, automation workflows, 
              and scalable digital solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
