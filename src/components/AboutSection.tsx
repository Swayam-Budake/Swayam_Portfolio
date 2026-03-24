import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Target, BarChart3, Megaphone } from "lucide-react";
import { useRef } from "react";
import AboutScene from "./AboutScene";

const skills = [
  { icon: TrendingUp, label: "SEO & SEM", desc: "Organic growth & paid search strategies" },
  { icon: Target, label: "Performance Marketing", desc: "ROI-focused campaign management" },
  { icon: BarChart3, label: "Analytics", desc: "Data-driven decision making" },
  { icon: Megaphone, label: "Brand Strategy", desc: "Building memorable brand identities" },
];

const SkillCard = ({ skill, i }: { skill: typeof skills[0]; i: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 20, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -10,
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px -12px hsl(32 100% 55% / 0.15)",
        transition: { duration: 0.3 },
      }}
      className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors group cursor-pointer overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, hsl(32 100% 55% / 0.1), hsl(260 60% 55% / 0.1))",
        }}
      />
      <motion.div
        className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-[50px]"
        style={{ background: "hsl(32 100% 55% / 0)" }}
        whileHover={{ background: "hsl(32 100% 55% / 0.15)" }}
      />

      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        <motion.div
          whileHover={{ rotate: [0, -20, 20, -10, 10, 0], scale: 1.3 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <skill.icon className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
        <h3 className="font-semibold mb-1 text-foreground">{skill.label}</h3>
        <p className="text-sm text-muted-foreground">{skill.desc}</p>
      </div>

      {/* Bottom shine line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scaleSection = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* 3D Scene background */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
        <AboutScene />
      </div>

      {/* Parallax decorative lines */}
      <motion.div
        style={{ x: x1 }}
        className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />
      <motion.div
        style={{ x: x2 }}
        className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
      />

      {/* Rotating corner accent */}
      <motion.div
        style={{ rotate }}
        className="absolute top-10 right-10 w-16 h-16 border border-primary/10 rounded-lg"
      />

      {/* Floating diamonds */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rotate-45"
          style={{ top: `${25 + i * 25}%`, right: `${15 + i * 10}%` }}
          animate={{
            y: [0, -20 - i * 5, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [45, 90, 45],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
        />
      ))}

      <motion.div style={{ scale: scaleSection }} className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-[2px] bg-gradient-to-r from-primary to-secondary mb-5"
            />
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">About</p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Marketing that{" "}
              <motion.span
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                whileInView={{ scale: [1, 1.08, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                moves
              </motion.span>{" "}
              the needle.
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-muted-foreground text-lg leading-relaxed mb-4"
            >
              With a passion for understanding consumer behavior and leveraging digital channels,
              I craft marketing strategies that don't just look good—they perform.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-muted-foreground leading-relaxed"
            >
              From SEO and content marketing to paid media and analytics, I bring a holistic
              approach to every project, ensuring every campaign is optimized for maximum impact.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4" style={{ perspective: "1200px" }}>
            {skills.map((skill, i) => (
              <SkillCard key={skill.label} skill={skill} i={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
