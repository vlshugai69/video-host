"use client";

import Typography from "@/ui/typography";

const AuthIntro: React.FC = () => {
  return (
    <div className="w-1/2 h-full bg-main-950 h-screen flex items-center justify-center p-8">
      <div>
        <Typography variant="h1" className="text-text text-center">
          <Typography variant="p" className="text-4xl text-primary">
            Your CV Assistant
          </Typography>{" "}
          Sign Up for Access to Results
        </Typography>
      </div>
    </div>
  );
};

export default AuthIntro;
