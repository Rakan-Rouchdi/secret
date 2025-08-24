import { useState } from "react";

interface BirthdayCardProps {
  isVisible: boolean;
}

const BirthdayCard = ({ isVisible }: BirthdayCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-xs mx-auto mb-8">
      <div className="relative">
        {/* Envelope */}
        <div 
          className={`relative w-full h-64 cursor-pointer transition-all duration-700 ${
            isVisible ? "animate-fade-in" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Envelope body */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg shadow-soft">
            {/* Envelope flap */}
            <div 
              className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-slate-300 to-slate-400 transition-transform duration-700 origin-top ${
                isOpen ? "rotate-x-180" : ""
              }`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transformStyle: "preserve-3d"
              }}
            />
            
            {/* Address area */}
            <div className="absolute bottom-4 left-4 right-4 text-slate-600 text-sm">
              <p className="font-semibold">To: Malak </p>
              <p className="font-semibold">From: Rakan </p>
            </div>
          </div>

          {/* Birthday card inside */}
          <div 
            className={`absolute inset-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg shadow-inner transition-all duration-700 ${
              isOpen ? "translate-y-[-20px] scale-105" : "translate-y-8 scale-95 opacity-0"
            }`}
          >
            <div className="p-6 h-full flex flex-col justify-center text-center">
              <h3 className="text-2xl font-bold mb-4 text-pink-800">
                Happy 21st Birthday Malak! 🎉
              </h3>
              <div className="text-gray-700 text-xs leading-relaxed space-y-1 font-medium">
                <p>Enjoy your day to the max,</p>
                <p>congratulations on graduating,</p>
                <p>and here's a big Huggable bear</p>
                <p>for you</p>
                <p>btw idk this idea js came up</p>
              </div>
            </div>
          </div>
        </div>

        {/* Click instruction */}
        {!isOpen && (
          <div className="text-center mt-4">
            <p className="text-muted-foreground text-sm animate-pulse">
              tap the envelope to open your card 💌
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayCard;