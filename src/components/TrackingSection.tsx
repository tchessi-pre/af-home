import { Star, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jean-Pierre K.",
    role: "Client Particulier",
    content: "Service impeccable ! Mon colis est arrivé à Lomé en parfait état et dans les délais annoncés. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Kodjo A.",
    role: "Commerçante",
    content: "Je travaille avec AF HOME Services depuis plus d'un an pour mes imports. La fiabilité est toujours au rendez-vous.",
    rating: 5,
  },
  {
    name: "Thomas D.",
    role: "Client Occasionnel",
    content: "Une équipe très professionnelle et réactive sur WhatsApp. C'est rassurant de pouvoir échanger facilement.",
    rating: 4,
  },
];

const TrackingSection = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-foreground/10 text-primary-foreground">
              <MessageCircle className="w-4 h-4" />
              <span>Témoignages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre priorité. Découvrez leurs retours d'expérience.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-accent fill-accent" : "text-primary-foreground/20"}`}
                    />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
