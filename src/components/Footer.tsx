const Footer = () => (
  <footer className="border-t border-border py-8 px-6 md:px-16 lg:px-24">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Swayam Budake. All rights reserved.</p>
      <p>Crafted with purpose.</p>
    </div>
  </footer>
);

export default Footer;
