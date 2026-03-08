import { motion } from "framer-motion";
import heroImage from "@/assets/hero-illustration.png";
import { Shield, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground mb-6">
              <Shield className="h-4 w-4" />
              Trusted by 10,000+ Shoppers
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
              Shop Smarter with{" "}
              <span className="text-primary">Real Reviews</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Instantly detect fake reviews on Amazon, Flipkart, and 50+ shopping sites. 
              Make confident purchases backed by genuine customer feedback.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/Vegadjay/shopping-chrome-exe.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <Github className="h-5 w-5" />
                Install via GitHub - Free
              </a>
              <a
                href="https://github.com/Vegadjay/shopping-chrome-exe.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-all hover:bg-secondary"
              >
                View on GitHub
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success" />
                100% Free
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success" />
                Privacy First
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success" />
                No Sign-up
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="animate-float">
              <img
                src={heroImage}
                alt="Shopping Chrome Extension detecting fake and genuine product reviews"
                className="w-full rounded-2xl shadow-2xl shadow-primary/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
