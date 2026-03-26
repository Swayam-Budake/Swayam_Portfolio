import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Target, BarChart3, Megaphone } from "lucide-react";
import { useRef } from "react";
import AboutScene from "./AboutScene";

const skills = [
  { icon: TrendingUp, label: "SEO & SEM", desc: "Search engine optimization, keyword research & paid search campaigns" },
  { icon: Target, label: "Performance Marketing", desc: "ROI-focused PPC, Google Ads & conversion rate optimization" },
  { icon: BarChart3, label: "Analytics & Insights", desc: "Google Analytics, data-driven marketing & campaign tracking" },
  { icon: Megaphone, label: "Social Media & Branding", desc: "Instagram, LinkedIn, Facebook & TikTok marketing strategies" },
];

const SkillCard = ({ skill, i }: { skill: typeof skills[0]; i: number }) => (
  <motion.article
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
    <motion.div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: "linear-gradient(135deg, hsl(32 100% 55% / 0.1), hsl(260 60% 55% / 0.1))" }}
    />

    <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
      <motion.div
        whileHover={{ rotate: [0, -20, 20, -10, 10, 0], scale: 1.3 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <skill.icon className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
      </motion.div>
      <h3 className="font-semibold mb-1 text-foreground">{skill.label}</h3>
      <p className="text-sm text-muted-foreground">{skill.desc}</p>
    </div>

    <motion.div
      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
      initial={{ width: "0%" }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.5 }}
    />
  </motion.article>
);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scaleSection = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden" aria-labelledby="about-heading">
      {/* 3D Scene background */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
        <AboutScene />
      </div>

      {/* Parallax decorative lines */}
      <motion.div style={{ x: x1 }} className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div style={{ x: x2 }} className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <motion.div style={{ rotate }} className="absolute top-10 right-10 w-16 h-16 border border-primary/10 rounded-lg" />

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

            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Digital marketing that{" "}
              <motion.span
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                whileInView={{ scale: [1, 1.08, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                drives growth
              </motion.span>
              .
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-muted-foreground text-lg leading-relaxed mb-4"
            >
              With deep expertise in <strong className="text-foreground">search engine optimization</strong>, <strong className="text-foreground">social media marketing</strong>, and <strong className="text-foreground">Google Ads management</strong>, I craft data-driven digital marketing strategies that don't just look good—they deliver measurable results and real ROI.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-muted-foreground leading-relaxed"
            >
              From <strong className="text-foreground">content marketing</strong> and <strong className="text-foreground">email automation</strong> to <strong className="text-foreground">influencer partnerships</strong> and <strong className="text-foreground">conversion rate optimization</strong>, I bring a holistic approach to every campaign, ensuring maximum impact across all digital channels.
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
