import { useState, forwardRef } from "react";
import { Package, Briefcase, Cylinder, Minus, Plus, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
  const [quantities, setQuantities] = useState<Record<string, number>>({
    fut: 0,
    valise: 0,
    carton: 0,
  });

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta),
    }));
  };

  const calculateTotal = () => {
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

  const getCartonSavings = () => {
    const cartonCount = quantities.carton;
    const packs = Math.floor(cartonCount / 2);
    return packs * 20;
  };

  const total = calculateTotal();
  const savings = getCartonSavings();

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
            Sélectionnez vos articles et obtenez instantanément le tarif de votre expédition
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Total Display */}
        <div className="mt-10 max-w-md mx-auto">
          <Card className="p-6 bg-primary text-primary-foreground">
            <div className="text-center">
              {savings > 0 && (
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent text-accent-foreground">
                  Vous économisez {savings}€ !
                </div>
              )}
              <p className="text-primary-foreground/80 mb-2">Total estimé</p>
              <p className="text-5xl font-display font-bold">{total}€</p>
              <Button
                className="mt-6 w-full btn-gradient-orange text-accent-foreground border-0 py-6 text-lg font-semibold rounded-xl"
                disabled={total === 0}
              >
                Réserver maintenant
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
});

PricingCalculator.displayName = "PricingCalculator";

export default PricingCalculator;
