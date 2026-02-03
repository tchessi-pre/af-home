import { useState } from "react";
import { Send, User, Phone, MapPin, Package, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const merchandiseTypes = [
  "Effets personnels",
  "Électroménager",
  "Vêtements",
  "Produits alimentaires (non périssables)",
  "Pièces automobiles",
  "Matériel électronique",
  "Meubles",
  "Autre",
];

const frenchCities = [
  "Paris",
  "Lyon",
  "Marseille",
  "Bordeaux",
  "Toulouse",
  "Nantes",
  "Lille",
  "Strasbourg",
  "Nice",
  "Autre",
];

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    merchandise: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.city || !formData.merchandise || !formData.date) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs du formulaire.",
        variant: "destructive",
      });
      return;
    }

    // WhatsApp Redirection
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = `*Nouvelle demande de réservation*\n\n` +
      `👤 *Nom:* ${formData.name}\n` +
      `📱 *Téléphone:* ${formData.phone}\n` +
      `📍 *Ville:* ${formData.city}\n` +
      `📦 *Marchandise:* ${formData.merchandise}\n` +
      `📅 *Date:* ${formData.date}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');

    toast({
      title: "Redirection vers WhatsApp",
      description: "Votre demande a été pré-remplie dans WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      city: "",
      merchandise: "",
      date: "",
    });
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
              <Send className="w-4 h-4" />
              <span>Réservation rapide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Réservez votre expédition
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Remplissez le formulaire et notre équipe vous contactera sous 24h
              pour organiser la collecte de vos marchandises.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Remplissez le formulaire</h4>
                  <p className="text-sm text-muted-foreground">Indiquez vos informations et le type de marchandise</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Confirmation sous 24h</h4>
                  <p className="text-sm text-muted-foreground">Notre équipe vous appelle pour confirmer</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Dépôt et expédition</h4>
                  <p className="text-sm text-muted-foreground">Déposez vos colis et suivez votre envoi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <Card className="p-6 sm:p-8 bg-card shadow-elevated border-0">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Nom complet
                </label>
                <Input
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-background border-border focus:border-accent"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  Téléphone
                </label>
                <Input
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-background border-border focus:border-accent"
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  Ville de départ
                </label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => setFormData({ ...formData, city: value })}
                >
                  <SelectTrigger className="h-12 bg-background border-border">
                    <SelectValue placeholder="Sélectionnez votre ville" />
                  </SelectTrigger>
                  <SelectContent>
                    {frenchCities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Merchandise Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Package className="w-4 h-4 text-muted-foreground" />
                  Type de marchandise
                </label>
                <Select
                  value={formData.merchandise}
                  onValueChange={(value) => setFormData({ ...formData, merchandise: value })}
                >
                  <SelectTrigger className="h-12 bg-background border-border">
                    <SelectValue placeholder="Que souhaitez-vous envoyer ?" />
                  </SelectTrigger>
                  <SelectContent>
                    {merchandiseTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  Date souhaitée de dépôt
                </label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="h-12 bg-background border-border focus:border-accent"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 btn-gradient-orange text-accent-foreground border-0 text-lg font-semibold rounded-xl mt-4"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer ma demande
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
