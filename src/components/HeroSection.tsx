import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import HeroScene from "./HeroScene";

const FloatingGraphic = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, type: "spring" }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-full"
    />
  </motion.div>
);

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* 3D Scene background */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full opacity-80">
        <HeroScene />
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, hsl(24 80% 55% / 0.08) 0%, transparent 60%)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/30"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-1/3 w-2 h-2 rounded-full bg-primary/20"
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-4 h-4 rounded-full border border-primary/20"
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-20 h-20 border border-primary/10 rounded-full"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-16 h-[1px] bg-primary/20"
        animate={{ scaleX: [0, 1, 0], x: [0, 30, 60] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 px-6 md:px-16 lg:px-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <motion.div
            className="h-[1px] bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Digital Marketing Professional
          </p>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
          >
            Swayam
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-primary"
          >
            Budake
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-10"
        >
          I help brands grow through data-driven strategies, compelling content,
          and performance marketing that delivers measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium transition-shadow hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-3.5 rounded-full font-medium hover:bg-foreground/5 transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
