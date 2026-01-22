import { Code, Cpu, Zap, Bot } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Bot, label: "AI Systems" },
    { icon: Zap, label: "n8n Automation" },
    { icon: Code, label: "SaaS Builder" },
    { icon: Cpu, label: "Tech Executor" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Building Real Systems,
                <span className="gradient-text block">Not Just Concepts</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  I am an AI content creator and advanced automation specialist with 
                  hands-on experience building <span className="text-foreground font-medium">n8n automation systems</span>, 
                  <span className="text-foreground font-medium"> WhatsApp AI agents</span>, 
                  <span className="text-foreground font-medium"> YouTube automation pipelines</span>, 
                  <span className="text-foreground font-medium"> AI SaaS tools</span>, and 
                  <span className="text-foreground font-medium"> face-based social media content</span>.
                </p>
                <p>
                  My focus is practical execution — building real systems that automate work, 
                  scale content, and deliver measurable results. No fluff, just functional 
                  solutions that work in production.
                </p>
              </div>

              {/* Highlight Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual Element */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-background border border-border/50 overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/30 rounded-full blur-[80px]" />
                
                {/* Code-like decoration */}
                <div className="absolute inset-8 flex flex-col justify-center items-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center glow-effect">
                      <span className="text-4xl font-heading font-bold text-primary-foreground">MN</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">Muhammad Nouman</h3>
                    <p className="text-sm text-muted-foreground">AI & Automation Specialist</p>
                    <p className="text-xs text-muted-foreground/60 mt-2">Kohat, KPK, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-card border border-border/50 shadow-lg animate-float">
                <span className="text-xs text-muted-foreground">Remote Ready</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-card border border-border/50 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xs text-muted-foreground">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
