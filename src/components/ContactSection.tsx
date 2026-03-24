import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something <span className="text-primary">great</span> together.
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
            Whether you need a full marketing strategy or help with a specific campaign, 
            I'd love to hear about your project.
          </p>

          <a
            href="mailto:hello@swayambudake.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity mb-12"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:hello@swayambudake.com" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
