import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3, Megaphone } from "lucide-react";

const skills = [
  { icon: TrendingUp, label: "SEO & SEM", desc: "Organic growth & paid search strategies" },
  { icon: Target, label: "Performance Marketing", desc: "ROI-focused campaign management" },
  { icon: BarChart3, label: "Analytics", desc: "Data-driven decision making" },
  { icon: Megaphone, label: "Brand Strategy", desc: "Building memorable brand identities" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Marketing that <span className="text-primary">moves</span> the needle.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              With a passion for understanding consumer behavior and leveraging digital channels, 
              I craft marketing strategies that don't just look good—they perform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From SEO and content marketing to paid media and analytics, I bring a holistic 
              approach to every project, ensuring every campaign is optimized for maximum impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group"
              >
                <skill.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
