import { useState, forwardRef } from "react";
import { Package, Briefcase, Cylinder, Minus, Plus, Calculator, Plane, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Item {
  id: string;
  name: string;
  price: number;
  icon: React.ReactNode;
  description: string;
}

const items: Item[] = [
  {
    id: "fut",
    name: "Fût plastique (200L)",
    price: 150,
    icon: <Cylinder className="w-8 h-8" />,
    description: "Idéal pour les liquides et produits en vrac",
  },
  {
    id: "valise",
    name: "Grande Valise",
    price: 50,
    icon: <Briefcase className="w-8 h-8" />,
    description: "Valise standard grande taille",
  },
  {
    id: "carton",
    name: "Carton",
    price: 100,
    icon: <Package className="w-8 h-8" />,
    description: "Pack 2 cartons : 180€ (économisez 20€)",
  },
];

const PricingCalculator = forwardRef<HTMLElement>((_, ref) => {
  const [activeTab, setActiveTab] = useState("maritime");
  const [airWeight, setAirWeight] = useState<string>("");
  
  const [quantities, setQuantities] = useState<Record<string, number>>({
    fut: 0,
    valise: 0,
    carton: 0,
  });

  const [userDetails, setUserDetails] = useState({
    name: "",
    firstname: "",
    phone: "",
  });

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta),
    }));
  };

  const calculateMaritimeTotal = () => {
    let total = 0;

    // Fûts
    total += quantities.fut * 150;

    // Valises
    total += quantities.valise * 50;

    // Cartons avec réduction pour 2+
    const cartonCount = quantities.carton;
    const packs = Math.floor(cartonCount / 2);
    const singles = cartonCount % 2;
    total += packs * 180 + singles * 100;

    return total;
  };

  const calculateAirRate = (weight: number) => {
    if (weight >= 1 && weight < 20) return 5000;
    if (weight >= 20) return 4000;
    return 0;
  };

  const calculateAirTotal = () => {
    const weight = parseFloat(airWeight) || 0;
    const rate = calculateAirRate(weight);
    return weight * rate;
  };

  const getCartonSavings = () => {
    const cartonCount = quantities.carton;
    const packs = Math.floor(cartonCount / 2);
    return packs * 20;
  };

  const maritimeTotal = calculateMaritimeTotal();
  const airTotal = calculateAirTotal();
  const savings = getCartonSavings();

  const handleWhatsAppReservation = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    let message = "*Nouvelle estimation de commande*\n\n";

    if (userDetails.firstname || userDetails.name) {
      message += `👤 *Client:* ${userDetails.firstname} ${userDetails.name}\n`;
    }
    if (userDetails.phone) {
      message += `📞 *Tél:* ${userDetails.phone}\n\n`;
    }

    if (activeTab === "maritime") {
      message += "*Type:* 🚢 Maritime\n";
      // Add items details
      if (quantities.fut > 0) message += `🛢️ *Fûts (200L):* ${quantities.fut}\n`;
      if (quantities.valise > 0) message += `🧳 *Valises:* ${quantities.valise}\n`;
      if (quantities.carton > 0) message += `📦 *Cartons:* ${quantities.carton}\n`;
      
      // Add total
      message += `\n💰 *Total estimé:* ${maritimeTotal}€`;
      if (savings > 0) {
        message += `\n✨ *Économie:* ${savings}€`;
      }
    } else {
      message += "*Type:* ✈️ Aérien\n";
      const weight = parseFloat(airWeight) || 0;
      message += `⚖️ *Poids:* ${weight} kg\n`;
      message += `🏷️ *Tarif appliqué:* ${calculateAirRate(weight)} FCFA/kg\n`;
      message += `\n💰 *Total estimé:* ${airTotal} FCFA`;
    }

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={ref} id="calculator" className="py-16 lg:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            <Calculator className="w-4 h-4" />
            <span>Calculateur de tarifs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Estimez votre envoi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sélectionnez votre mode de transport et obtenez instantanément le tarif
          </p>
        </div>

        <Tabs defaultValue="maritime" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-12">
            <TabsTrigger value="maritime" className="gap-2">
              <Ship className="w-4 h-4" /> Maritime
            </TabsTrigger>
            <TabsTrigger value="aerien" className="gap-2">
              <Plane className="w-4 h-4" /> Aérien
            </TabsTrigger>
          </TabsList>

          <TabsContent value="maritime">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Item Cards */}
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="p-6 bg-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-elevated group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-accent mb-2">{item.price}€</p>
                    <p className="text-sm text-muted-foreground mb-6">{item.description}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full border-border hover:border-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={quantities[item.id] === 0}
                        aria-label={`Diminuer la quantité de ${item.name}`}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-2xl font-bold font-display w-8 text-center text-foreground">
                        {quantities[item.id]}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full border-border hover:border-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label={`Augmenter la quantité de ${item.name}`}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="aerien">
            <div className="max-w-2xl mx-auto space-y-8">
              <Card className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Tarifs Fret Aérien</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="font-semibold text-primary mb-1">1 à 19 kg</p>
                      <p className="text-2xl font-bold text-accent">5 000 FCFA<span className="text-sm text-muted-foreground font-normal">/kg</span></p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="font-semibold text-primary mb-1">20 à 50 kg</p>
                      <p className="text-2xl font-bold text-accent">4 000 FCFA<span className="text-sm text-muted-foreground font-normal">/kg</span></p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="weight" className="text-lg">Poids de votre colis (kg)</Label>
                  <div className="relative">
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Ex: 25"
                      min="1"
                      value={airWeight}
                      onChange={(e) => setAirWeight(e.target.value)}
                      className="h-14 text-lg pl-4 pr-12"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                      kg
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Le tarif est calculé automatiquement en fonction du poids saisi.
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Total Display */}
        <div className="mt-10 max-w-md mx-auto">
          <Card className="p-6 bg-primary text-primary-foreground">
            <div className="text-center">
              {activeTab === "maritime" && savings > 0 && (
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent text-accent-foreground">
                  Vous économisez {savings}€ !
                </div>
              )}
              <p className="text-primary-foreground/80 mb-2">Total estimé</p>
              <p className="text-5xl font-display font-bold">
                {activeTab === "maritime" ? `${maritimeTotal}€` : `${airTotal.toLocaleString()} FCFA`}
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    className="mt-6 w-full btn-gradient-orange text-accent-foreground border-0 py-6 text-lg font-semibold rounded-xl"
                    disabled={activeTab === "maritime" ? maritimeTotal === 0 : airTotal === 0}
                  >
                    Réserver maintenant
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirmer la réservation</AlertDialogTitle>
                    <div className="grid gap-4 py-4 text-left">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="firstname">Prénom</Label>
                          <Input
                            id="firstname"
                            placeholder="Jean"
                            value={userDetails.firstname}
                            onChange={(e) => setUserDetails({ ...userDetails, firstname: e.target.value })}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="name">Nom</Label>
                          <Input
                            id="name"
                            placeholder="Dupont"
                            value={userDetails.name}
                            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          placeholder="06 12 34 56 78"
                          value={userDetails.phone}
                          onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <AlertDialogDescription>
                      Vous allez être redirigé vers WhatsApp pour finaliser votre commande avec les détails suivants :
                      <br /><br />
                      <span className="font-semibold block text-foreground">
                        {activeTab === "maritime" ? (
                          <>
                            {quantities.fut > 0 && `• ${quantities.fut} Fût(s) (200L)`}
                            {quantities.fut > 0 && <br />}
                            {quantities.valise > 0 && `• ${quantities.valise} Valise(s)`}
                            {quantities.valise > 0 && <br />}
                            {quantities.carton > 0 && `• ${quantities.carton} Carton(s)`}
                          </>
                        ) : (
                          <>
                            • Fret Aérien<br />
                            • Poids: {airWeight} kg<br />
                            • Tarif: {calculateAirRate(parseFloat(airWeight) || 0)} FCFA/kg
                          </>
                        )}
                      </span>
                      <br />
                      <span className="font-bold text-lg text-primary">
                        Total : {activeTab === "maritime" ? `${maritimeTotal}€` : `${airTotal.toLocaleString()} FCFA`}
                      </span>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleWhatsAppReservation}
                      className="bg-green-500 hover:bg-green-600 text-white border-0"
                      disabled={!userDetails.name || !userDetails.firstname || !userDetails.phone}
                    >
                      Confirmer sur WhatsApp
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
});

PricingCalculator.displayName = "PricingCalculator";

export default PricingCalculator;
