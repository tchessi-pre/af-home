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
              <strong>AF HOME SERVICES</strong><br />
              Société à responsabilité limitée (SARL)<br />
              Capital social : 1 300,00 €<br />
              Siège social : 36 Le Gué 35530 SERVON-SUR-VILAINE<br />
              RCS Rennes : 993 264 894<br />
              SIRET : 993 264 894 00011<br />
              Numéro TVA intracommunautaire : FR90993264894
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">2. Directeur de la publication</h2>
            <p className="text-muted-foreground leading-relaxed">
              Monsieur ALOWANOU Foly Fiacre<br />
              En qualité de Gérant
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">3. Hébergeur</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              États-Unis
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">4. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Email : folowanou@gmail.com<br />
              Téléphone : {import.meta.env.VITE_PHONE_DISPLAY}
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
              AF HOME Services ne stocke aucune donnée personnelle sur ce site internet. Le site fonctionne sans base de données utilisateur.
              <br /><br />
              Les échanges et la transmission d'informations pour les devis et les commandes s'effectuent directement via WhatsApp ou par email.
              Les données communiquées par ces canaux sont utilisées uniquement dans le cadre de la relation commerciale (établissement de devis, facturation, suivi de transport).
              <br /><br />
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès,
              de rectification et de suppression des informations vous concernant transmises lors de nos échanges. Pour exercer ces droits,
              contactez-nous directement via WhatsApp ou par email à : folowanou@gmail.com
            </p>
          </section>

          {/* <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site,
              vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </section> */}

          <p className="text-sm text-muted-foreground mt-12">
            Dernière mise à jour : Février 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;