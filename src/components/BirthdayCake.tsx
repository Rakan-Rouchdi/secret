import BirthdayCandles from "./BirthdayCandles";

interface BirthdayCakeProps {
  isVisible: boolean;
}

const BirthdayCake = ({ isVisible }: BirthdayCakeProps) => {
  if (!isVisible) return null;

  return (
    <div className={`w-full max-w-sm mx-auto mb-8 ${isVisible ? "animate-fade-in" : ""}`}>
      <div className="text-center">
        <h3 className="heading-birthday text-2xl font-bold mb-12">
          Birthday Cake! 🎂
        </h3>
        
        <div className="relative">
          {/* Cake base */}
          <div className="relative mx-auto w-48 h-32 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-full rounded-b-lg shadow-soft">
            {/* Cake layers */}
            <div className="absolute bottom-8 left-2 right-2 h-6 bg-gradient-to-b from-pink-200 to-pink-300 rounded"></div>
            <div className="absolute bottom-16 left-4 right-4 h-6 bg-gradient-to-b from-pink-100 to-pink-200 rounded"></div>
            
            {/* Frosting decorations */}
            <div className="absolute top-2 left-6 w-3 h-3 bg-white rounded-full opacity-90"></div>
            <div className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full opacity-90"></div>
            <div className="absolute top-6 left-12 w-2 h-2 bg-white rounded-full opacity-90"></div>
            <div className="absolute top-3 right-14 w-3 h-3 bg-white rounded-full opacity-90"></div>
            
            {/* Number 21 on cake */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-4xl font-bold text-primary-foreground drop-shadow-lg">
                21
              </span>
            </div>
          </div>
          
          {/* Candles on top */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <BirthdayCandles />
          </div>
          
          {/* Firework effects */}
          <div className="absolute -top-8 -left-8 text-3xl animate-sparkle">🎆</div>
          <div className="absolute -top-6 -right-10 text-2xl animate-sparkle" style={{animationDelay: '0.5s'}}>🎇</div>
          <div className="absolute -bottom-4 -left-10 text-3xl animate-sparkle" style={{animationDelay: '1s'}}>🎆</div>
          <div className="absolute -bottom-6 -right-8 text-2xl animate-sparkle" style={{animationDelay: '1.5s'}}>🎇</div>
          <div className="absolute -top-4 -left-4 text-2xl animate-sparkle" style={{animationDelay: '2s'}}>✨</div>
          <div className="absolute -top-2 -right-6 text-xl animate-sparkle" style={{animationDelay: '2.7s'}}>⭐</div>
          <div className="absolute -bottom-2 -left-6 text-lg animate-sparkle" style={{animationDelay: '3.4s'}}>🌟</div>
          <div className="absolute -bottom-4 -right-4 text-2xl animate-sparkle" style={{animationDelay: '4.1s'}}>✨</div>
        </div>
        
        <div className="mt-6">
          <p className="text-magical text-lg">
            Make a wish! 🕯️✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCake;