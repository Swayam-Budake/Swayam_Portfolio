import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "hsl(32 100% 55% / 0.06)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-60 h-60 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "hsl(260 60% 55% / 0.04)" }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 50 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-primary to-secondary mb-5 mx-auto"
          />
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">Get In Touch</p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Let's build something{" "}
            <motion.span
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
              whileInView={{ rotate: [0, -2, 2, 0] }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              great
            </motion.span>{" "}
            together.
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-12">
            Whether you need a full marketing strategy or help with a specific campaign,
            I'd love to hear about your project.
          </p>

          <motion.a
            href="mailto:hello@swayambudake.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsl(32 100% 55% / 0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold mb-14 transition-all"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </motion.a>

          <div className="flex justify-center gap-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Mail, href: "mailto:hello@swayambudake.com" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.15, y: -3, borderColor: "hsl(32 100% 55% / 0.5)" }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full border border-border hover:bg-primary/5"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
