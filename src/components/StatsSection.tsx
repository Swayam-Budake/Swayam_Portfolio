import { motion } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "50+", label: "Campaigns Delivered" },
  { value: "3x", label: "Average ROI" },
  { value: "10M+", label: "Impressions Generated" },
  { value: "95%", label: "Client Retention" },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(24 80% 55% / 0.05) 0%, transparent 50%, hsl(220 20% 10% / 0.03) 100%)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="text-center group cursor-default"
            >
              <motion.p
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</p>
              <motion.div
                className="mx-auto mt-3 h-[2px] bg-primary/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 30 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
