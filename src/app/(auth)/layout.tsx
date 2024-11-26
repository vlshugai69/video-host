import AuthIntro from "@/components/AuthIntro";
import type { WithChildren } from "@/types";

const AuthLayout: React.FC<WithChildren<unknown>> = async ({ children }) => {
  return (
    <main className="h-full bg-main-bg">
      <div className="h-screen w-full flex flex-1">
        <AuthIntro />
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
