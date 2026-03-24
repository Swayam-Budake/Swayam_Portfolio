import { motion, useMotionValue, useTransform } from "framer-motion";
import { TrendingUp, Target, BarChart3, Megaphone } from "lucide-react";
import { useRef } from "react";

const skills = [
  { icon: TrendingUp, label: "SEO & SEM", desc: "Organic growth & paid search strategies", color: "from-primary/20 to-primary/5" },
  { icon: Target, label: "Performance Marketing", desc: "ROI-focused campaign management", color: "from-secondary/20 to-secondary/5" },
  { icon: BarChart3, label: "Analytics", desc: "Data-driven decision making", color: "from-primary/15 to-accent/10" },
  { icon: Megaphone, label: "Brand Strategy", desc: "Building memorable brand identities", color: "from-accent/30 to-primary/10" },
];

const SkillCard = ({ skill, i }: { skill: typeof skills[0]; i: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors group cursor-pointer overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <skill.icon className="w-8 h-8 text-primary mb-3" />
        </motion.div>
        <h3 className="font-semibold mb-1">{skill.label}</h3>
        <p className="text-sm text-muted-foreground">{skill.desc}</p>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headingWords = ["Marketing", "that", "moves", "the", "needle."];

  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 -left-10 w-40 h-40 rounded-full border border-primary/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 right-10 w-1 h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              className="h-[2px] bg-primary mb-4"
            />
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About</p>
            
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  transition={{ duration: 0.4 }}
                  className={`inline-block mr-3 ${word === "moves" ? "text-primary" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed mb-4"
            >
              With a passion for understanding consumer behavior and leveraging digital channels,
              I craft marketing strategies that don't just look good—they perform.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed"
            >
              From SEO and content marketing to paid media and analytics, I bring a holistic
              approach to every project, ensuring every campaign is optimized for maximum impact.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4" style={{ perspective: "800px" }}>
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
