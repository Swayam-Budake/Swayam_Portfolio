import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6 md:px-16 lg:px-24 relative" role="contentinfo">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        © {new Date().getFullYear()} Swayam Budake — Digital Marketing Professional. All rights reserved.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground/60"
      >
        SEO · Social Media Marketing · Growth Strategy
      </motion.p>
    </div>
  </footer>
);

export default Footer;
