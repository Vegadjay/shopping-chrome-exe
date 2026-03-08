import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <Shield className="h-6 w-6 text-primary" />
          ReviewGuard
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#install" className="transition-colors hover:text-foreground">Install</a>
          <a href="https://github.com/Vegadjay/shopping-chrome-exe.git" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">GitHub</a>
        </div>

        <a
          href="https://github.com/Vegadjay/shopping-chrome-exe.git"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          Install via GitHub
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          <a href="#features" onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">Features</a>
          <a href="#install" onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">Install</a>
          <a href="https://github.com/Vegadjay/shopping-chrome-exe.git" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-muted-foreground hover:text-foreground">GitHub</a>
          <a href="https://github.com/Vegadjay/shopping-chrome-exe.git" target="_blank" rel="noopener noreferrer" className="block rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">Install via GitHub</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
