import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, lazy, Suspense } from "react";
const StatsScene = lazy(() => import("./StatsScene"));

const stats = [
  { value: "50+", label: "Marketing Campaigns Delivered" },
  { value: "3x", label: "Average Client ROI" },
  { value: "10M+", label: "Ad Impressions Generated" },
  { value: "95%", label: "Client Retention Rate" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden" aria-label="Digital marketing results and performance metrics">
      <Suspense fallback={null}>
        <StatsScene />
      </Suspense>
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, hsl(32 100% 55% / 0.3), hsl(260 60% 55% / 0.2), transparent)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <motion.div style={{ scale, opacity }} className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              role="listitem"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center group cursor-default relative"
            >
              <motion.p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-primary to-primary/60 bg-clip-text text-transparent">
                {stat.value}
              </motion.p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase group-hover:text-foreground transition-colors">
                {stat.label}
              </p>
              <motion.div
                className="mx-auto mt-4 h-[2px] rounded-full bg-gradient-to-r from-primary/40 to-secondary/30"
                initial={{ width: 0 }}
                whileInView={{ width: 30 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
