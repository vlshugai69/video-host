import { baseQueryClient } from "@/api/queryClient";
import AuthIntro from "@/components/AuthIntro";
import QueryClientContextProvider from "@/context/QueryClientContextProvider";
import type { WithChildren } from "@/types";
import { QueryClientProvider } from "@tanstack/react-query";

const AuthLayout: React.FC<WithChildren<unknown>> = async ({ children }) => {
  return (
    <QueryClientContextProvider>
      <main className="h-full bg-main-bg">
        <div className="h-screen w-full flex flex-1">
          <AuthIntro />
          {children}
        </div>
      </main>
    </QueryClientContextProvider>
  );
};

export default AuthLayout;
