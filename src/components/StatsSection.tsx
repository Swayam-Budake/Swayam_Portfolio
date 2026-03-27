import { motion } from "framer-motion";
import marquee1 from "@/assets/marquee-1.jpeg";
import marquee2 from "@/assets/marquee-2.jpeg";
import marquee3 from "@/assets/marquee-3.jpeg";
import marquee4 from "@/assets/marquee-4.jpeg";
import marquee5 from "@/assets/marquee-5.jpeg";
import marquee6 from "@/assets/marquee-6.jpeg";

const images = [marquee1, marquee2, marquee3, marquee4, marquee5, marquee6];

const StatsSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden" aria-label="Design work showcase">
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, hsl(32 100% 55% / 0.3), hsl(260 60% 55% / 0.2), transparent)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-6xl mx-auto relative mb-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[2px] bg-gradient-to-r from-primary to-secondary mb-5"
          />
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">Design Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            I don't just strategize —{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              I create.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            From social media graphics to branded content, I design visuals that stop the scroll. Every post you see below was made for a real client — because great marketing needs great creative.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-shrink-0 px-3">
              <img
                src={src}
                alt={`Design work sample ${(i % images.length) + 1}`}
                className="h-[300px] w-auto rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
