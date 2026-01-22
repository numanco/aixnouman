import { ExternalLink } from "lucide-react";

const SocialProofSection = () => {
  const socials = [
    {
      platform: "TikTok",
      handle: "@aixnouman",
      link: "https://tiktok.com/@aixnouman",
      color: "hover:text-pink-500",
    },
    {
      platform: "Instagram",
      handle: "@aixnouman",
      link: "https://instagram.com/aixnouman",
      color: "hover:text-pink-400",
    },
    {
      platform: "YouTube",
      handle: "@aixnouman",
      link: "https://youtube.com/@aixnouman",
      color: "hover:text-red-500",
    },
    {
      platform: "LinkedIn",
      handle: "aixnouman",
      link: "https://linkedin.com/in/aixnouman",
      color: "hover:text-blue-500",
    },
    {
      platform: "Facebook",
      handle: "Muhammad Nouman",
      link: "https://facebook.com/profile.php?id=61585294057768",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-secondary/20">
      {/* Background Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Building in Public
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Follow my journey as I build real AI systems and share daily content 
            across platforms.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 ${social.color}`}
              >
                <span className="font-medium">{social.platform}</span>
                <span className="text-muted-foreground text-sm">{social.handle}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
