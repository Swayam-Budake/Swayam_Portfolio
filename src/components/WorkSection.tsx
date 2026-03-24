import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-16 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            Selected <span className="text-primary">projects</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background rounded-2xl border border-border p-8 md:p-10 hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 bg-accent rounded-xl px-6 py-4 text-center">
                  <p className="text-2xl font-bold text-accent-foreground">{project.metric.split(" ")[0]}</p>
                  <p className="text-sm text-muted-foreground">{project.metric.split(" ").slice(1).join(" ")}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
