import { useState, useEffect } from "react";

interface PresentBoxProps {
  onOpen: () => void;
}

const PresentBox = ({ onOpen }: PresentBoxProps) => {
  const [isGlowing, setIsGlowing] = useState(true);

  useEffect(() => {
    const glowInterval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 2000);

    return () => clearInterval(glowInterval);
  }, []);

  const handleClick = () => {
    onOpen();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="heading-birthday text-4xl md:text-6xl mb-4 font-bold">
            Happy 21st Bday
          </h1>
          <h2 className="heading-birthday text-3xl md:text-5xl mb-8 font-semibold">
            Malak! 🎉
          </h2>
        </div>

        <div className="relative">
          <div 
            className={`btn-present animate-shake ${isGlowing ? "animate-glow" : ""}`}
            onClick={handleClick}
            role="button"
            aria-label="Click to open birthday present"
          >
            🎁
          </div>
          
          {/* Sparkle effects around the present */}
          <div className="absolute -top-4 -left-4 text-2xl animate-sparkle" style={{animationDelay: '0s'}}>✨</div>
          <div className="absolute -top-2 -right-6 text-xl animate-sparkle" style={{animationDelay: '0.5s'}}>⭐</div>
          <div className="absolute -bottom-2 -left-6 text-lg animate-sparkle" style={{animationDelay: '1s'}}>💖</div>
          <div className="absolute -bottom-4 -right-4 text-2xl animate-sparkle" style={{animationDelay: '1.5s'}}>✨</div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-magical text-lg md:text-xl">
            tap to open ur gifts 
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresentBox;