import { Shield, MapPin, Clock, Ship, ArrowLeftRight, HeadphonesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Sécurité maximale",
    description: "Conteneurs scellés et sécurisés, assurance incluse pour tous vos envois.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Suivi en temps réel",
    description: "Suivez votre colis à chaque étape de son voyage, de la France jusqu'à Lomé.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Départs réguliers",
    description: "Plusieurs départs par mois pour des délais optimisés et prévisibles.",
  },
  {
    icon: <ArrowLeftRight className="w-8 h-8" />,
    title: "Aller-retour",
    description: "Transport dans les deux sens : France → Lomé et Lomé → France.",
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: "Expertise maritime",
    description: "Plus de 10 ans d'expérience dans le fret maritime vers l'Afrique de l'Ouest.",
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "Support dédié",
    description: "Une équipe disponible pour répondre à toutes vos questions 7j/7.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            <Ship className="w-4 h-4" />
            <span>Nos avantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AF HOME Services, c'est la garantie d'un service fiable et professionnel
            pour tous vos envois vers l'Afrique.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elevated group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
