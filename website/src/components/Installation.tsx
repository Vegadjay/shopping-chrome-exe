import { motion } from "framer-motion";
import { Chrome, Github } from "lucide-react";

const Installation = () => {
  return (
    <section id="install" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Get Started in One Click
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Choose your preferred installation method.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Chrome className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Not on Chrome Web Store
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                This extension is not published on the Chrome Web Store yet. Use the GitHub repository to download it.
              </p>
              <a
                href="https://github.com/Vegadjay/shopping-chrome-exe.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Chrome className="h-4 w-4" />
                Open GitHub Repository
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background">
                <Github className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Developer Mode
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Download from GitHub, extract, go to <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">chrome://extensions</code>, enable Developer mode, and load unpacked.
              </p>
              <a
                href="https://github.com/Vegadjay/shopping-chrome-exe.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Installation;
