const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold gradient-text">MN</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">Muhammad Nouman</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            AI Content & Automation Specialist
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
