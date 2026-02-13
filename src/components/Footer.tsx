import { BookOpen, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <BookOpen className="h-4 w-4 text-secondary-foreground" />
              </div>
              <span className="font-heading text-lg font-bold">BT-Notes</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Your one-stop destination for handwritten college notes, skill-based learning resources, and previous year questions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="transition-colors hover:text-primary-foreground">Home</Link></li>
              <li><Link to="/college-notes" className="transition-colors hover:text-primary-foreground">College Notes</Link></li>
              <li><a href="/#about" className="transition-colors hover:text-primary-foreground">About</a></li>
              <li><a href="/#contact" className="transition-colors hover:text-primary-foreground">Contact</a></li>
            </ul>
          </div>

          {/* Developer Info */}
          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-secondary">Developer</h4>
            <p className="mb-2 text-sm text-primary-foreground/70">Developed by <strong className="text-primary-foreground">Abhishek Gupta</strong></p>
            <p className="mb-3 text-sm text-primary-foreground/70">Built with React & Tailwind CSS</p>
            <div className="flex gap-3">
              <a href="#" className="text-primary-foreground/50 transition-colors hover:text-secondary"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-primary-foreground/50 transition-colors hover:text-secondary"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-primary-foreground/50 transition-colors hover:text-secondary"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} BT-Notes. All rights reserved. Made with ❤️ by Abhishek Gupta.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
