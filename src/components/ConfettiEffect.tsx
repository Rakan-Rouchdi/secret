import { useEffect, useState } from "react";

interface ConfettiEffectProps {
  isActive: boolean;
}

const ConfettiEffect = ({ isActive }: ConfettiEffectProps) => {
  const [confetti, setConfetti] = useState<Array<{id: number, left: number, delay: number, emoji: string}>>([]);

  useEffect(() => {
    if (isActive) {
      const confettiEmojis = ['🎉', '🎊', '✨', '🌟', '💖', '💕', '🎈', '🎂'];
      const newConfetti = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        emoji: confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)]
      }));
      setConfetti(newConfetti);

      // Clear confetti after animation
      const timer = setTimeout(() => {
        setConfetti([]);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute text-2xl animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            top: '100vh'
          }}
        >
          {piece.emoji}
        </div>
      ))}
    </div>
  );
};

export default ConfettiEffect;