import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Nouman delivered an n8n automation that removed hours of manual work every week. Clear communication and production-ready execution.",
      name: "Client (Agency Partner)",
      role: "Automation Workflow Delivery",
    },
    {
      quote:
        "Strong systems thinking — from content pipeline design to deployment details. The result was stable, measurable, and easy to iterate.",
      name: "Collaborator",
      role: "AI Content Systems",
    },
    {
      quote:
        "Fast turnaround, real-world implementation, and great attention to edge cases. Exactly what we needed for scaling ops.",
      name: "Startup Team",
      role: "Ops + Automation",
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Testimonials</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Trusted for execution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A few words from clients and collaborators (replace these with your real quotes anytime).
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <figure
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-colors"
              >
                <blockquote className="text-sm md:text-base leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border/40">
                  <div className="font-heading font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
