import { useState, useEffect } from "react";
import { Ship, ArrowRight, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import carShipping1 from "@/assets/car-shipping-1.jpg";
import carShipping2 from "@/assets/car-shipping-2.jpg";
import carShipping3 from "@/assets/car-shipping-3.jpg";

interface HeroSectionProps {
  onEstimateClick: () => void;
}

const vehicleImages = [
  { src: carShipping1, alt: "SUV Toyota dans un conteneur", label: "SUV & 4x4" },
  { src: carShipping2, alt: "Mercedes dans un conteneur", label: "Berlines" },
  { src: carShipping3, alt: "Pick-up dans un port", label: "Pick-up & Utilitaires" },
];

const HeroSection = ({ onEstimateClick }: HeroSectionProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % vehicleImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen lg:min-h-[90vh] hero-gradient overflow-hidden pb-32 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 md:w-96 h-48 md:h-96 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] border border-primary-foreground/10 rounded-full" />
      </div>

      <div className="container relative z-10 pt-20 lg:pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-medium rounded-full bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm animate-fade-in">
              <Ship className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Transport maritime France ↔ Afrique</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Expédiez vos colis vers l'Afrique{" "}
              <span className="text-gradient">en toute sérénité</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ligne directe <strong>France → Lomé</strong> et <strong>Lomé → France</strong>.
              Conteneurs sécurisés, suivi en temps réel, départs réguliers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                className="btn-gradient-orange text-primary-foreground border-0 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl font-semibold group w-full sm:w-auto"
                onClick={onEstimateClick}
              >
                Estimer mon tarif
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl font-semibold w-full sm:w-auto"
              >
                Suivre mon colis
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-foreground">500+</p>
                <p className="text-xs sm:text-sm text-primary-foreground/60">Conteneurs expédiés</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-foreground">98%</p>
                <p className="text-xs sm:text-sm text-primary-foreground/60">Clients satisfaits</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-foreground">15j</p>
                <p className="text-xs sm:text-sm text-primary-foreground/60">Délai moyen</p>
              </div>
            </div>
          </div>

          {/* Right - Vehicle Images Carousel */}
          <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in mt-6 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-floating border-2 sm:border-4 border-primary-foreground/20">
                {vehicleImages.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-opacity duration-700 ${index === currentImage ? "opacity-100" : "opacity-0 absolute inset-0"
                      }`}
                  />
                ))}
                {/* Label */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/90 backdrop-blur-sm rounded-full">
                  <Car className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  <span className="text-primary-foreground font-semibold text-xs sm:text-sm">
                    {vehicleImages[currentImage].label}
                  </span>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 justify-center">
                {vehicleImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-14 h-10 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${index === currentImage
                        ? "border-accent scale-105 shadow-orange"
                        : "border-primary-foreground/30 opacity-60 hover:opacity-100"
                      }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Caption */}
              <p className="text-center text-primary-foreground/70 text-xs sm:text-sm mt-3 sm:mt-4">
                📦 Nous expédions vos véhicules en toute sécurité
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-0 right-0 overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex animate-scroll-x gap-4 sm:gap-8 whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-8">
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Paris → Lomé</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Lyon → Lomé</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Marseille → Lomé</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Lomé → Paris</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Car className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Véhicules</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Suivi en temps réel</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
