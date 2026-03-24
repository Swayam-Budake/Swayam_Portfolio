import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-primary/10"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-10 right-10 w-3 h-3 rounded-full bg-primary/20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-primary/30"
        animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            className="h-[2px] bg-primary mb-4 mx-auto"
          />
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something{" "}
            <motion.span
              className="text-primary inline-block"
              whileInView={{ rotate: [0, -3, 3, 0] }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              great
            </motion.span>{" "}
            together.
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
            Whether you need a full marketing strategy or help with a specific campaign,
            I'd love to hear about your project.
          </p>

          <motion.a
            href="mailto:hello@swayambudake.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-medium transition-shadow hover:shadow-xl hover:shadow-primary/25 mb-12"
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
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full border border-border hover:border-primary/30"
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
