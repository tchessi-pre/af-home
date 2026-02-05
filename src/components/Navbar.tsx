import { useState, useEffect } from "react";
import { Ship, Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["calculator", "why-us", "tracking", "booking"];
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);

      if (currentSection) {
        window.history.replaceState(null, "", `#${currentSection}`);
      } else if (window.scrollY < 100) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "#", section: "" },
    { label: "Tarifs", href: "#calculator", section: "calculator" },
    { label: "Suivi", href: "#tracking", section: "tracking" },
    { label: "Pourquoi nous", href: "#why-us", section: "why-us" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", href);
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-primary/10"
        : "bg-primary/98 backdrop-blur-md"
        }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-accent to-orange-dark flex items-center justify-center shadow-orange transition-transform group-hover:scale-105">
              <Ship className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              <Plane className="w-3 h-3 lg:w-4 lg:h-4 text-white absolute -top-1 -right-1 rotate-45" />
            </div>
            <div className="block">
              <span className={`text-lg lg:text-xl font-display font-bold tracking-tight transition-colors ${isScrolled ? "text-primary" : "text-primary-foreground"}`}>
                AF HOME
              </span>
              <span className="text-sm lg:text-base text-accent font-medium ml-1">
                Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === link.section
                  ? "text-accent"
                  : isScrolled
                    ? "text-primary/70 hover:text-primary hover:bg-primary/5"
                    : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
              >
                {link.label}
                {activeSection === link.section && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:+${import.meta.env.VITE_WHATSAPP_NUMBER}`}
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-primary/70 hover:text-primary" : "text-primary-foreground/70 hover:text-primary-foreground"}`}
            >
              {import.meta.env.VITE_PHONE_DISPLAY}
            </a>
            <Button
              asChild
              className="btn-gradient-orange text-white border-0 font-semibold rounded-xl px-6 hover:scale-105 transition-transform"
            >
              <a href="#booking" onClick={(e) => handleNavClick(e, "#booking")}>
                Réserver
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${isScrolled ? "bg-primary/5 text-primary hover:bg-primary/10" : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className={`py-4 border-t ${isScrolled ? "border-primary/10" : "border-primary-foreground/10"}`}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${activeSection === link.section
                    ? "text-accent bg-accent/10"
                    : isScrolled
                      ? "text-primary/80 hover:text-primary hover:bg-primary/5"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <div className={`pt-2 mt-2 border-t ${isScrolled ? "border-primary/10" : "border-primary-foreground/10"}`}>
                <a
                  href={`tel:+${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                  className={`block px-4 py-3 text-base font-medium ${isScrolled ? "text-primary/70" : "text-primary-foreground/70"}`}
                >
                  📞 {import.meta.env.VITE_PHONE_DISPLAY}
                </a>
                <Button
                  asChild
                  className="w-full btn-gradient-orange text-white border-0 font-semibold rounded-xl mt-2"
                >
                  <a href="#booking" onClick={(e) => handleNavClick(e, "#booking")}>
                    Réserver un envoi
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
