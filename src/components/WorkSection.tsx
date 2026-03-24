import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Growth Campaign",
    desc: "Scaled an e-commerce brand's revenue by 3x through a combination of SEO optimization, Google Ads, and social media retargeting.",
    tags: ["SEO", "Google Ads", "Social Media"],
    metric: "300% Revenue Growth",
  },
  {
    title: "SaaS Lead Generation",
    desc: "Designed and executed a B2B lead generation funnel that reduced cost per acquisition by 45% while increasing qualified leads.",
    tags: ["Content Marketing", "LinkedIn Ads", "CRO"],
    metric: "45% Lower CPA",
  },
  {
    title: "Brand Awareness Campaign",
    desc: "Launched a multi-channel brand awareness campaign that reached 2M+ impressions and increased brand recall by 60%.",
    tags: ["Branding", "Display Ads", "Influencer Marketing"],
    metric: "2M+ Impressions",
  },
];

const ProjectCard = ({ project, i }: { project: typeof projects[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, rotateY: i % 2 === 0 ? -5 : 5 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-primary/30 transition-all cursor-pointer overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] bg-primary/0 group-hover:bg-primary/8 transition-all duration-700" />

      {/* Accent line */}
      <motion.div
        className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent rounded-full"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: i * 0.15 + 0.3 }}
      />

      <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
            <motion.div className="inline-flex" whileHover={{ x: 3, y: -3 }}>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full text-xs font-normal bg-muted/50 text-muted-foreground border-border">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <motion.div
          className="shrink-0 bg-accent/50 border border-border rounded-xl px-6 py-4 text-center"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {project.metric.split(" ")[0]}
          </p>
          <p className="text-xs text-muted-foreground tracking-wider uppercase">
            {project.metric.split(" ").slice(1).join(" ")}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="work" ref={sectionRef} className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Parallax grid */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-[0.025]"
      >
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(hsl(32 100% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(32 100% 55%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-primary to-secondary mb-5"
          />
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-14">
            Selected{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              projects
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
