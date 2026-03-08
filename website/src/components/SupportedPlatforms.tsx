import { motion } from "framer-motion";

const platforms = [
  "Amazon", "Flipkart", "eBay", "Walmart", "Best Buy", 
  "Myntra", "Ajio", "Target", "Newegg", "Etsy",
];

const SupportedPlatforms = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Works Where You Shop
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Compatible with all major e-commerce platforms worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {platforms.map((platform, i) => (
            <motion.span
              key={platform}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              {platform}
            </motion.span>
          ))}
          <span className="rounded-full border border-dashed border-primary/40 bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground">
            + 40 more
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportedPlatforms;
