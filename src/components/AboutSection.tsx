import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Target, BarChart3, Megaphone } from "lucide-react";
import { useRef } from "react";

const skills = [
  { icon: TrendingUp, label: "SEO & SEM", desc: "Organic growth & paid search strategies" },
  { icon: Target, label: "Performance Marketing", desc: "ROI-focused campaign management" },
  { icon: BarChart3, label: "Analytics", desc: "Data-driven decision making" },
  { icon: Megaphone, label: "Brand Strategy", desc: "Building memorable brand identities" },
];

const SkillCard = ({ skill, i }: { skill: typeof skills[0]; i: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
      className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all group cursor-pointer overflow-hidden"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[40px] bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />

      <div className="relative z-10">
        <motion.div whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }} transition={{ duration: 0.5 }}>
          <skill.icon className="w-8 h-8 text-primary mb-4" />
        </motion.div>
        <h3 className="font-semibold mb-1 text-foreground">{skill.label}</h3>
        <p className="text-sm text-muted-foreground">{skill.desc}</p>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const x2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Parallax decorative lines */}
      <motion.div
        style={{ x: x1 }}
        className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent"
      />
      <motion.div
        style={{ x: x2 }}
        className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/15 to-transparent"
      />

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 border-t border-r border-primary/10 rounded-tr-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-primary to-secondary mb-5"
            />
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">About</p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Marketing that{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                moves
              </span>{" "}
              the needle.
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed mb-4"
            >
              With a passion for understanding consumer behavior and leveraging digital channels,
              I craft marketing strategies that don't just look good—they perform.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground leading-relaxed"
            >
              From SEO and content marketing to paid media and analytics, I bring a holistic
              approach to every project, ensuring every campaign is optimized for maximum impact.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4" style={{ perspective: "1000px" }}>
            {skills.map((skill, i) => (
              <SkillCard key={skill.label} skill={skill} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
