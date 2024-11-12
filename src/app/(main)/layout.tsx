import AppSidebar from "@/components/AppSidebar";
import { cookies } from "next/headers";
import type { WithChildren } from "@/types";
import { SidebarProvider } from "@/ui/sidebar";

const MainLayout: React.FC<WithChildren<unknown>> = async ({ children }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <main className="h-full bg-black-900">
      <div className="flex gap-8 flex-1">
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
        </SidebarProvider>
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
