import { motion } from "framer-motion";
import { Download, MousePointerClick, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Install the Extension",
    description: "It is not on the Chrome Web Store yet. Download it from GitHub and install in Developer Mode.",
  },
  {
    icon: MousePointerClick,
    step: "02",
    title: "Browse & Shop",
    description: "Visit any supported shopping site. The extension activates automatically.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "See Trusted Reviews",
    description: "Green and red indicators instantly show which reviews you can trust.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Up and Running in Seconds
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            No configuration needed. Install, browse, and shop with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Step {step.step}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
