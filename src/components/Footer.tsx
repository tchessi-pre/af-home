import { Ship, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground py-12 lg:py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Ship className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">AF HOME</h3>
                <p className="text-sm text-primary-foreground/60">Services</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Votre partenaire de confiance pour l'expédition de marchandises entre la France et l'Afrique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#calculator" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Calculer mon tarif
                </a>
              </li>
              <li>
                <a href="#tracking" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Suivi de colis
                </a>
              </li>
              <li>
                <a href="#booking" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Réserver un envoi
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Pourquoi nous choisir
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <span>{import.meta.env.VITE_PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>contact@afhome-services.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Paris, France<br />Lomé, Togo</span>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Nos destinations</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>🇫🇷 France (toutes villes)</p>
              <p>🇹🇬 Togo (Lomé)</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2025 AF HOME Services. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/mentions-legales" className="hover:text-accent transition-colors">Mentions légales</Link>
            <Link to="/cgu" className="hover:text-accent transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
