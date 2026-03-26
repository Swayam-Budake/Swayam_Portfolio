import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin, Twitter, Send } from "lucide-react";
import { useRef, lazy, Suspense } from "react";
const ContactScene = lazy(() => import("./ContactScene"));

const ContactSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const scaleSection = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [6, 0]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden" aria-labelledby="contact-heading">
      <Suspense fallback={null}>
        <ContactScene />
      </Suspense>

      <motion.div style={{ rotate: orbRotate }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 pointer-events-none" />
      <motion.div style={{ rotate: orbRotate }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-secondary/5 pointer-events-none" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "hsl(32 100% 55% / 0.1)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/25"
          style={{ top: `${15 + (i * 37) % 70}%`, left: `${10 + (i * 43) % 80}%` }}
          animate={{
            y: [0, -20 - (i % 3) * 10, 0],
            x: [0, (i % 2 ? 15 : -15), 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 5 + i * 0.7, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <motion.div
        style={{ scale: scaleSection, rotateX, transformStyle: "preserve-3d", perspective: "1200px" }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 50 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-primary to-secondary mb-5 mx-auto"
          />
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">Get In Touch</p>

          <div className="overflow-hidden mb-2">
            <motion.h2
              id="contact-heading"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Ready to grow your brand?
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.p
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              <motion.span
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                whileInView={{ rotate: [0, -3, 3, 0], scale: [1, 1.05, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Let's talk strategy.
              </motion.span>
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-lg mx-auto mb-12"
          >
            Whether you need a full digital marketing strategy, SEO audit, social media management, or help scaling your Google Ads campaigns — I'd love to hear about your goals.
          </motion.p>

          <motion.a
            href="mailto:hello@swayambudake.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 60px hsl(32 100% 55% / 0.35), 0 0 120px hsl(32 100% 55% / 0.1)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold mb-14 transition-all relative overflow-hidden group"
            aria-label="Email Swayam Budake for digital marketing consultation"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <Send className="w-5 h-5 relative z-10" aria-hidden="true" />
            <span className="relative z-10">Start a Project</span>
          </motion.a>

          <nav className="flex justify-center gap-5" aria-label="Social media links">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/swayambudake", label: "LinkedIn — Swayam Budake" },
              { icon: Twitter, href: "https://twitter.com/swayambudake", label: "Twitter — Swayam Budake" },
              { icon: Mail, href: "mailto:hello@swayambudake.com", label: "Email Swayam Budake" },
            ].map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                initial={{ opacity: 0, y: 30, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.12, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.2, y: -5, boxShadow: "0 10px 30px -5px hsl(32 100% 55% / 0.2)" }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors p-3.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 relative group"
              >
                <Icon className="w-5 h-5 relative z-10" aria-hidden="true" />
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
