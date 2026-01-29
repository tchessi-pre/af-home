import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "33612345678"; // Replace with actual number
  const message = encodeURIComponent("Bonjour, je souhaite avoir des informations sur vos services d'expédition.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-full bg-[#25D366] text-white shadow-floating hover:scale-105 transition-transform duration-200 group"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-semibold">Discuter sur WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
