import { Ship, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary py-8">
        <div className="container">
          <Button asChild variant="ghost" className="text-primary-foreground mb-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <Ship className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-primary-foreground">Mentions Légales</h1>
              <p className="text-primary-foreground/70">AF HOME Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">1. Éditeur du site</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site AF HOME Services est édité par :<br />
              <strong>AF HOME Services</strong><br />
              Société par actions simplifiée (SAS)<br />
              Capital social : [À compléter]<br />
              Siège social : Paris, France<br />
              RCS Paris : [À compléter]<br />
              SIRET : [À compléter]<br />
              Numéro TVA intracommunautaire : [À compléter]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">2. Directeur de la publication</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Nom du directeur de publication]<br />
              En qualité de Président
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">3. Hébergeur</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site est hébergé par :<br />
              <strong>xxxxx</strong><br />
              [Adresse de l'hébergeur]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">4. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Email : contact@afhome-services.com<br />
              Téléphone : +33 6 12 34 56 78
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">5. Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, etc.) est la propriété exclusive
              d'AF HOME Services ou de ses partenaires. Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
              sauf autorisation écrite préalable d'AF HOME Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">6. Données personnelles</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès,
              de rectification, de suppression et de portabilité de vos données personnelles. Pour exercer ces droits,
              contactez-nous à : contact@afhome-services.com
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site,
              vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-12">
            Dernière mise à jour : Février 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;