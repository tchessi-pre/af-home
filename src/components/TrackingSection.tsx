import { useState } from "react";
import { Search, Package, Truck, Ship, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const demoSteps = [
  { icon: <Package className="w-5 h-5" />, label: "Colis reçu", date: "15 Jan 2025", location: "Paris, France", completed: true },
  { icon: <Truck className="w-5 h-5" />, label: "En transit vers le port", date: "17 Jan 2025", location: "Le Havre, France", completed: true },
  { icon: <Ship className="w-5 h-5" />, label: "Chargé sur navire", date: "20 Jan 2025", location: "Atlantique", completed: true },
  { icon: <Ship className="w-5 h-5" />, label: "En mer", date: "Estimé 28 Jan", location: "En route vers Lomé", completed: false, current: true },
  { icon: <MapPin className="w-5 h-5" />, label: "Arrivée à Lomé", date: "Estimé 2 Fév", location: "Port de Lomé, Togo", completed: false },
];

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showDemo, setShowDemo] = useState(false);

  const handleSearch = () => {
    if (trackingNumber.trim()) {
      setShowDemo(true);
    }
  };

  return (
    <section id="tracking" className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 text-primary-foreground">
              <Search className="w-4 h-4" />
              <span>Suivi de colis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
              Suivez votre envoi
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Entrez votre numéro de suivi pour connaître l'état de votre colis en temps réel.
            </p>
          </div>

          {/* Search Box */}
          <Card className="p-4 sm:p-6 bg-primary-foreground/10 border-0 backdrop-blur-sm mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Ex: AFH-2025-001234"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 h-14 bg-primary-foreground text-foreground border-0 text-lg placeholder:text-muted-foreground"
              />
              <Button
                onClick={handleSearch}
                className="h-14 px-8 btn-gradient-orange text-accent-foreground border-0 text-lg font-semibold rounded-xl"
              >
                <Search className="w-5 h-5 mr-2" />
                Rechercher
              </Button>
            </div>
          </Card>

          {/* Demo Tracking Timeline */}
          {showDemo && (
            <Card className="p-6 sm:p-8 bg-primary-foreground/5 border-0 backdrop-blur-sm animate-fade-in">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary-foreground/10">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold">Colis #{trackingNumber || "AFH-2025-001234"}</p>
                  <p className="text-sm text-primary-foreground/60">En transit - Arrivée estimée : 2 février 2025</p>
                </div>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-primary-foreground/20" />

                {/* Steps */}
                <div className="space-y-6">
                  {demoSteps.map((step, index) => (
                    <div key={index} className="flex gap-4 relative">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${step.completed
                            ? "bg-accent text-accent-foreground"
                            : step.current
                              ? "bg-accent/20 text-accent border-2 border-accent animate-pulse-slow"
                              : "bg-primary-foreground/10 text-primary-foreground/40"
                          }`}
                      >
                        {step.icon}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className={`font-semibold ${step.completed || step.current ? "" : "text-primary-foreground/50"}`}>
                          {step.label}
                        </p>
                        <p className="text-sm text-primary-foreground/60">{step.date}</p>
                        <p className="text-sm text-primary-foreground/40">{step.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {/* Info Note */}
          {!showDemo && (
            <p className="text-center text-sm text-primary-foreground/50 mt-4">
              Entrez n'importe quel numéro pour voir une démo du suivi
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
