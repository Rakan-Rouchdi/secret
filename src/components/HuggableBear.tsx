import { useState } from "react";
import { toast } from "sonner";

interface HuggableBearProps {
  isVisible: boolean;
}

const HuggableBear = ({ isVisible }: HuggableBearProps) => {
  const [isHugging, setIsHugging] = useState(false);
  const [hugCount, setHugCount] = useState(0);

  if (!isVisible) return null;

  const handleHug = () => {
    setIsHugging(true);
    setHugCount(prev => prev + 1);
    
    const hugMessages = [
      "🐻 Huggable loves you so much!",
      "✨ The coziest hug ever!",
      "💖 Snuggle time with Huggable!"
    ];
    
    const randomMessage = hugMessages[Math.floor(Math.random() * hugMessages.length)];
    toast(randomMessage);
    
    setTimeout(() => setIsHugging(false), 1000);
  };

  return (
    <div className={`w-full max-w-sm mx-auto mb-8 ${isVisible ? "animate-fade-in" : ""}`}>
      <div className="text-center">
        <h3 className="heading-birthday text-2xl font-bold mb-4">
          Meet Your Huggable! 🐻
        </h3>
        
        <div className="relative">
          {/* Teddy bear */}
          <div 
            className={`text-9xl cursor-pointer select-none transition-all duration-300 hover:scale-110 ${
              isHugging ? "animate-hug" : "animate-bounce-gentle"
            }`}
            onClick={handleHug}
            role="button"
            aria-label="Click Huggable for a hug"
          >
            🧸
          </div>
          
          {/* Heart effects when hugging */}
          {isHugging && (
            <>
              <div className="absolute -top-4 -left-4 text-2xl animate-sparkle">💕</div>
              <div className="absolute -top-2 -right-6 text-xl animate-sparkle" style={{animationDelay: '0.2s'}}>💖</div>
              <div className="absolute -bottom-2 -left-6 text-lg animate-sparkle" style={{animationDelay: '0.4s'}}>💕</div>
              <div className="absolute -bottom-4 -right-4 text-2xl animate-sparkle" style={{animationDelay: '0.6s'}}>💖</div>
            </>
          )}
        </div>
        
        <div className="mt-4">
          <p className="text-magical text-lg mb-2">
            No Fibromyalgia here, just tap me.
          </p>
          {hugCount > 0 && (
            <p className="text-muted-foreground text-sm">
              Hugs given: {hugCount} 💕
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HuggableBear;