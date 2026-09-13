import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 bg-gradient-to-br from-emerald-300 to-teal-400 text-blue-950 shadow-lg shadow-teal-900/20 transition-all duration-300 hover:-translate-y-1 hover:from-emerald-200 hover:to-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      href="https://wa.me/8801323814588"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="WhatsApp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
    </a>
  );
}
