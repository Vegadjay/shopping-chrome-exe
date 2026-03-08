import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
            <Shield className="h-5 w-5 text-primary" />
            ReviewGuard
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Helping shoppers make informed decisions by filtering out fake reviews across major e-commerce platforms.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jay Vegad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
