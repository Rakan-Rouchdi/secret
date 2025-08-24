const BirthdayCandles = () => {
  return (
    <div className="flex justify-center items-end space-x-1 mb-4">
      {/* Candle for "2" */}
      <div className="relative">
        <div className="w-1 h-8 bg-gradient-to-t from-accent to-yellow-300 rounded-full"></div>
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full animate-candle-flicker"></div>
      </div>
      
      {/* Candle for "1" */}
      <div className="relative">
        <div className="w-1 h-8 bg-gradient-to-t from-accent to-yellow-300 rounded-full"></div>
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full animate-candle-flicker" style={{animationDelay: '0.5s'}}></div>
      </div>
    </div>
  );
};

export default BirthdayCandles;