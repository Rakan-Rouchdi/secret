import { useState, useEffect } from "react";
import { toast } from "sonner";
import PasswordScreen from "@/components/PasswordScreen";
import PresentBox from "@/components/PresentBox";
import BirthdayCard from "@/components/BirthdayCard";
import HuggableBear from "@/components/HuggableBear";
import BirthdayCake from "@/components/BirthdayCake";
import ConfettiEffect from "@/components/ConfettiEffect";

type AppState = "password" | "present" | "celebration";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("password");
  const [showConfetti, setShowConfetti] = useState(false);

  // Reset to password screen on page refresh
  useEffect(() => {
    setAppState("password");
  }, []);

  const handlePasswordSuccess = () => {
    setAppState("present");
  };

  const handlePresentOpen = () => {
    setAppState("celebration");
    setShowConfetti(true);
    toast("have fun!");
    
    // Stop confetti after a while
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  if (appState === "password") {
    return <PasswordScreen onCorrectPassword={handlePasswordSuccess} />;
  }

  if (appState === "present") {
    return <PresentBox onOpen={handlePresentOpen} />;
  }

  return (
    <div className="min-h-screen p-4 relative overflow-x-hidden">
      <ConfettiEffect isActive={showConfetti} />
      
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 pt-8">
          <h1 className="heading-birthday text-4xl md:text-6xl font-bold mb-4">
            🎉 Let's Party! 🎉
          </h1>
          <p className="text-magical text-lg md:text-xl">
            yoooooo welcome inside  ✨
          </p>
        </header>

        <main className="space-y-12">
          {/* Birthday Card */}
          <section className="flex justify-center">
            <BirthdayCard isVisible={appState === "celebration"} />
          </section>

          {/* Interactive Elements Grid */}
          <section className="grid md:grid-cols-2 gap-8 items-start">
            {/* Huggable Bear */}
            <div className="flex justify-center">
              <HuggableBear isVisible={appState === "celebration"} />
            </div>

            {/* Birthday Cake */}
            <div className="flex justify-center">
              <BirthdayCake isVisible={appState === "celebration"} />
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Index;
