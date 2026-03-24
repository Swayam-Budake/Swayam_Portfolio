import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Growth Campaign",
    desc: "Scaled an e-commerce brand's revenue by 3x through a combination of SEO optimization, Google Ads, and social media retargeting.",
    tags: ["SEO", "Google Ads", "Social Media"],
    metric: "300% Revenue Growth",
    gradient: "from-primary/10 via-transparent to-transparent",
  },
  {
    title: "SaaS Lead Generation",
    desc: "Designed and executed a B2B lead generation funnel that reduced cost per acquisition by 45% while increasing qualified leads.",
    tags: ["Content Marketing", "LinkedIn Ads", "CRO"],
    metric: "45% Lower CPA",
    gradient: "from-secondary/10 via-transparent to-transparent",
  },
  {
    title: "Brand Awareness Campaign",
    desc: "Launched a multi-channel brand awareness campaign that reached 2M+ impressions and increased brand recall by 60%.",
    tags: ["Branding", "Display Ads", "Influencer Marketing"],
    metric: "2M+ Impressions",
    gradient: "from-accent/20 via-transparent to-transparent",
  },
];

const ProjectCard = ({ project, i }: { project: typeof projects[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, hsl(24 80% 55% / 0.06), transparent 60%)`
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-background rounded-2xl border border-border p-8 md:p-10 hover:border-primary/30 transition-all cursor-pointer overflow-hidden"
    >
      {/* Mouse-follow gradient */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background }} />
      
      {/* Side accent line */}
      <motion.div
        className="absolute left-0 top-0 w-[3px] bg-primary rounded-full"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
      />

      <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
            <motion.div
              className="inline-flex"
              whileHover={{ x: 3, y: -3 }}
            >
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, ti) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + ti * 0.05 + 0.3 }}
              >
                <Badge variant="secondary" className="rounded-full text-xs font-normal">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="shrink-0 bg-accent rounded-xl px-6 py-4 text-center"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-2xl font-bold text-accent-foreground">{project.metric.split(" ")[0]}</p>
          <p className="text-sm text-muted-foreground">{project.metric.split(" ").slice(1).join(" ")}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-16 lg:px-24 bg-card/50 relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(24 80% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(24 80% 55%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            className="h-[2px] bg-primary mb-4"
          />
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            Selected <span className="text-primary">projects</span>
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
