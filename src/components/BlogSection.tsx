import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Tag } from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  tags: string[];
};

const BlogSection = () => {
  const posts: Post[] = [
    {
      title: "n8n in production: reliability patterns that actually work",
      excerpt:
        "How I design workflows for retries, rate limits, observability, and safe deployments — without spaghetti automations.",
      tags: ["n8n", "Production", "Reliability"],
    },
    {
      title: "AI content pipelines: from idea → script → edit → publish",
      excerpt:
        "A practical blueprint for building repeatable short-form content systems with automation and QA checkpoints.",
      tags: ["AI Content", "Automation"],
    },
    {
      title: "WhatsApp AI agents: architecture, guardrails, and scaling",
      excerpt:
        "Key decisions for message routing, tool calling, safety rules, and logging — plus common pitfalls to avoid.",
      tags: ["WhatsApp", "Agents"],
    },
  ];

  return (
    <section id="insights" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Blog / Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
                AI automation notes
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Short, practical posts about n8n workflows, automation architecture, and shipping AI systems.
              </p>
            </div>
            <a href="#contact" className="shrink-0">
              <Button variant="heroOutline" size="lg">
                Request a topic
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-heading font-semibold text-lg leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-xs font-medium"
                    >
                      <Tag className="w-3 h-3 text-primary" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-border/40">
                  <p className="text-xs text-muted-foreground">
                    Coming soon: dedicated blog page + SEO.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
