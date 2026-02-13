import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/data/notesData";
import { BookOpen, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const el = document.getElementById(href.replace("/#", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">BT-Notes</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("/#") ? (
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
