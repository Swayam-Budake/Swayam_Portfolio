import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef, lazy, Suspense } from "react";
const HeroScene = lazy(() => import("./HeroScene"));

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero — Swayam Budake Digital Marketing Expert">
      {/* 3D Scene */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full opacity-80">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Moody gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none z-[1]" />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "hsl(32 100% 55% / 0.12)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "hsl(260 60% 55% / 0.1)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30 - i * 5, 0],
            x: [0, (i % 2 ? 10 : -10), 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 px-6 md:px-16 lg:px-24 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <motion.div
            className="h-[2px] bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs">
            Digital Marketing Professional
          </p>
        </motion.div>

        <header>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120, rotateX: 40 }}
              animate={{ y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]"
            >
              Swayam
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.span
              initial={{ y: 120, rotateX: 40 }}
              animate={{ y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]"
            >
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Budake
              </span>
            </motion.span>
          </div>
        </header>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-10"
        >
          From SEO and paid ads to creative strategy and social media — I bring both the data and the ideas.
          I've worked with real brands, run real campaigns, and delivered real results.
          I don't just run campaigns. I build strategies that rank, convert, and stick.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(32 100% 55% / 0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold transition-all"
            aria-label="View my digital marketing portfolio and case studies"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: "hsl(32 100% 55% / 0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-muted-foreground/20 px-8 py-3.5 rounded-full font-medium hover:bg-muted/30 transition-all"
            aria-label="Contact Swayam Budake for digital marketing services"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll down to learn more about Swayam Budake"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
