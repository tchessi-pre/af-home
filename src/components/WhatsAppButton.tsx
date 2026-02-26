import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const message = encodeURIComponent("Bonjour, je souhaite avoir des informations sur vos services d'expédition.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 hover:gap-3 px-3 hover:px-5 py-3 hover:py-4 rounded-full bg-[#25D366] text-white shadow-floating hover:scale-105 transition-all duration-300 group overflow-hidden max-w-[50px] hover:max-w-[300px]"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6 shrink-0" />
      <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-semibold">
        Discuter sur WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
