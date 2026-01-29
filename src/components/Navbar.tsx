import { useState } from "react";
import { Ship, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "#" },
    { label: "Tarifs", href: "#calculator" },
    { label: "Suivi", href: "#tracking" },
    { label: "Pourquoi nous", href: "#why-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Ship className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-display font-bold text-primary-foreground">AF HOME</span>
              <span className="text-sm text-primary-foreground/60 ml-1">Services</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="btn-gradient-orange text-accent-foreground border-0 font-semibold rounded-lg"
            >
              <a href="#booking">Réserver</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="btn-gradient-orange text-accent-foreground border-0 font-semibold rounded-lg mt-2"
              >
                <a href="#booking" onClick={() => setIsOpen(false)}>
                  Réserver un envoi
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
