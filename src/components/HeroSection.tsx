import { useState } from "react";
import { Ship, ArrowRight, Plane, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import maritimeCargoShip from "@/assets/maritime-cargo-ship.jpg";
import aerialCargoPlane from "@/assets/aerial-cargo-plane.jpg";

interface HeroSectionProps {
  onEstimateClick: () => void;
}

// Prochains départs (à mettre à jour régulièrement)
const nextDepartures = {
  maritime: { date: "15 Février 2026", destination: "Lomé", delai: "15-20 jours" },
  aerien: { date: "8 Février 2026", destination: "Lomé", delai: "3-5 jours" },
};

const HeroSection = ({ onEstimateClick }: HeroSectionProps) => {
  const [activeMode, setActiveMode] = useState<"maritime" | "aerien">("maritime");

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
              <span>Fret maritime & aérien France ↔ Afrique</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Expédiez vos colis vers l'Afrique{" "}
              <span className="text-gradient">en toute sérénité</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ligne directe <strong>France → Lomé</strong> et <strong>Lomé → France</strong>.
              Transport maritime et aérien sécurisé, suivi en temps réel.
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

          {/* Right - Transport Modes & Next Departure */}
          <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in mt-6 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Mode Selector */}
              <div className="flex gap-3 mb-4 justify-center">
                <button
                  onClick={() => setActiveMode("maritime")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${activeMode === "maritime"
                      ? "bg-accent text-accent-foreground shadow-orange"
                      : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                    }`}
                >
                  <Ship className="w-4 h-4" />
                  <span className="text-sm">Maritime</span>
                </button>
                <button
                  onClick={() => setActiveMode("aerien")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${activeMode === "aerien"
                      ? "bg-accent text-accent-foreground shadow-orange"
                      : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                    }`}
                >
                  <Plane className="w-4 h-4" />
                  <span className="text-sm">Aérien</span>
                </button>
              </div>

              {/* Flip Card Container */}
              <div
                className="relative h-[420px] sm:h-[460px] lg:h-[480px]"
                style={{ perspective: "1000px" }}
              >
                {/* Flip Card Inner */}
                <div
                  className="relative w-full h-full transition-transform duration-700 ease-in-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: activeMode === "aerien" ? "rotateY(180deg)" : "rotateY(0deg)"
                  }}
                >
                  {/* Front - Maritime */}
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-primary-foreground/20"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={maritimeCargoShip}
                        alt="Cargo maritime"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
                    </div>
                    <div className="relative flex flex-col items-center justify-between h-full py-6 sm:py-8 px-6">
                      {/* Titre en haut */}
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Ship className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                            Fret Maritime
                          </h3>
                        </div>
                        <p className="text-white/90 text-sm sm:text-base text-center">
                          Conteneurs sécurisés pour vos marchandises volumineuses
                        </p>
                      </div>
                      <div className="w-full bg-black/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                          <span className="text-white font-semibold text-sm sm:text-base">
                            Prochain départ
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white/70 text-xs sm:text-sm">Date:</span>
                            <span className="text-white font-bold text-sm sm:text-base">
                              {nextDepartures.maritime.date}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/70 text-xs sm:text-sm">Destination:</span>
                            <span className="text-white font-semibold text-sm sm:text-base">
                              {nextDepartures.maritime.destination}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/70 text-xs sm:text-sm">Délai:</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                              <span className="text-white font-semibold text-sm sm:text-base">
                                {nextDepartures.maritime.delai}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back - Aerien */}
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-primary-foreground/20"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={aerialCargoPlane}
                        alt="Avion cargo"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
                    </div>
                    <div className="relative flex flex-col items-center justify-between h-full py-6 sm:py-8 px-6">
                      {/* Titre en haut */}
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                            Fret Aérien
                          </h3>
                        </div>
                        <p className="text-white/90 text-sm sm:text-base text-center">
                          Livraison express pour vos envois urgents
                        </p>
                      </div>
                      <div className="w-full bg-black/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                          <span className="text-white font-semibold text-sm sm:text-base">
                            Prochain départ
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white/70 text-xs sm:text-sm">Date:</span>
                            <span className="text-white font-bold text-sm sm:text-base">
                              {nextDepartures.aerien.date}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/70 text-xs sm:text-sm">Destination:</span>
                            <span className="text-white font-semibold text-sm sm:text-base">
                              {nextDepartures.aerien.destination}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/70 text-xs sm:text-sm">Délai:</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                              <span className="text-white font-semibold text-sm sm:text-base">
                                {nextDepartures.aerien.delai}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-center text-primary-foreground/70 text-xs sm:text-sm mt-3 sm:mt-4">
                ✈️🚢 Cliquez pour basculer entre les modes de transport
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      {/* <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-0 right-0 overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex animate-scroll-x gap-4 sm:gap-8 whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-8">
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Paris → Lomé</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Fret Aérien Express</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Marseille → Lomé</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Livraison 3-5 jours</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Conteneurs sécurisés</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-primary-foreground font-medium text-sm sm:text-base">Suivi en temps réel</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}

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
