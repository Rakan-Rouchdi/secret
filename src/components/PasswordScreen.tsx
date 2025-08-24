import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface PasswordScreenProps {
  onCorrectPassword: () => void;
}

const PasswordScreen = ({ onCorrectPassword }: PasswordScreenProps) => {
  const [password, setPassword] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "MALAK21") {
      toast("Nice, u got in");
      onCorrectPassword();
    } else {
      setIsShaking(true);
      toast.error("not meant for you lol");
      setTimeout(() => setIsShaking(false), 500);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce-gentle">🤫</div>
          <h1 className="heading-birthday text-4xl md:text-5xl mb-4 font-bold">
            Highly Confidential 
          </h1>
          <p className="text-magical text-lg">
            put the secret key in, if u have it
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`card-magical p-6 ${isShaking ? "animate-shake" : ""}`}>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="text-center text-lg h-12 bg-input/50 border-primary/30 focus:border-primary focus:ring-primary/50"
              autoFocus
            />
          </div>
          <Button 
            type="submit" 
            className="btn-birthday w-full h-12 text-lg"
            disabled={!password.trim()}
          >
            Unlock 🗝️
          </Button>
        </form>

      </div>
    </div>
  );
};

export default PasswordScreen;