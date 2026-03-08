import { motion } from "framer-motion";
import { Download, Settings, FolderOpen, Pin } from "lucide-react";

const installationSteps = [
  {
    icon: Download,
    title: "1. Download the Extension",
    description: "Open the GitHub repository, download the project ZIP, and extract it to a folder on your computer.",
  },
  {
    icon: Settings,
    title: "2. Open Chrome Extensions",
    description: "Go to chrome://extensions in Chrome and turn on Developer mode from the top-right corner.",
  },
  {
    icon: FolderOpen,
    title: "3. Click Load Unpacked",
    description: "Click Load unpacked and select the extracted extension folder that contains manifest.json.",
  },
  {
    icon: Pin,
    title: "4. Pin and Start Using",
    description: "Pin the extension from the puzzle icon and open any supported shopping site to start using it.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Everything You Need to Shop Safely
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Follow these steps to add the extension in Chrome using Load unpacked.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {installationSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
