import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border shadow-lg animate-in slide-in-from-bottom-full duration-500">
      <div className="container max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
            En continuant votre navigation, vous acceptez notre utilisation des cookies.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Refuser
          </Button>
          <Button size="sm" onClick={handleAccept} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Accepter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
