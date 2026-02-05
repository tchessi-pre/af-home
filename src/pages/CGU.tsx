import { Ship, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CGU = () => {
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
              <h1 className="text-2xl font-display font-bold text-primary-foreground">Conditions Générales de Vente</h1>
              <p className="text-primary-foreground/70">AF HOME Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Article 1 - Objet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre
              AF HOME Services et ses clients dans le cadre des prestations de transport de marchandises
              par voie maritime et aérienne entre la France et l'Afrique.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Article 2 - Services proposés</h2>
            <p className="text-muted-foreground leading-relaxed">
              AF HOME Services propose les services suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
              <li>Transport de marchandises par fret maritime</li>
              <li>Transport de marchandises par fret aérien</li>
              <li>Expédition de véhicules</li>
              <li>Suivi de colis en temps réel</li>
              <li>Services de dédouanement</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Article 3 - Tarifs</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les tarifs sont établis en fonction du poids, du volume et de la destination des marchandises.
              Un devis personnalisé est fourni avant toute expédition. Les prix indiqués sont en euros et peuvent
              être soumis à des frais supplémentaires (douane, assurance, etc.).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Article 4 - Commande et paiement</h2>
            <p className="text-muted-foreground leading-relaxed">
              La commande est confirmée après réception du paiement intégral ou de l'acompte convenu.
              Les moyens de paiement acceptés sont : virement bancaire, carte bancaire et espèces (dans certaines conditions).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Article 5 - Délais de livraison</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les délais de livraison sont indicatifs et dépendent du mode de transport choisi :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
              <li><strong>Fret aérien :</strong> 3 à 7 jours ouvrés</li>
              <li><strong>Fret maritime :</strong> 3 à 6 semaines</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              AF HOME Services ne peut être tenu responsable des retards dus à des circonstances exceptionnelles
              (conditions météorologiques, grèves, formalités douanières, etc.).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Article 6 - Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              AF HOME Services s'engage à prendre toutes les précautions nécessaires pour assurer le bon
              acheminement des marchandises. En cas de perte ou de dommage, la responsabilité est limitée
              aux conditions définies par les conventions internationales de transport (Convention de Varsovie
              pour le fret aérien, Règles de La Haye-Visby pour le fret maritime).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Article 7 - Assurance</h2>
            <p className="text-muted-foreground leading-relaxed">
              Une assurance optionnelle est proposée pour couvrir la valeur totale des marchandises expédiées.
              Il est recommandé au client de souscrire cette assurance pour une protection maximale.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Article 8 - Réclamations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Toute réclamation doit être formulée par écrit dans un délai de 7 jours suivant la réception
              des marchandises. Passé ce délai, aucune réclamation ne sera acceptée.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Article 9 - Droit applicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut de résolution amiable,
              les tribunaux de Paris seront seuls compétents.
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

export default CGU;