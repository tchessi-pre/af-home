import { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingCalculator from "@/components/PricingCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/TrackingSection"; // Renommé implicitement via l'import
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const calculatorRef = useRef<HTMLElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onEstimateClick={scrollToCalculator} />
      <PricingCalculator ref={calculatorRef} />
      <WhyChooseUs />
      <Testimonials />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
