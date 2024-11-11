"use client";

import { Button } from "@/ui/button";

const TestPage: React.FC = () => {
  return (
    <div className="text-3xl bg-black-900 font-bold underline">
      {/* <SidebarProvider>
        <AppSidebar />
      </SidebarProvider> */}

      <Button variant="secondary">Click me</Button>
    </div>
  );
};

export default TestPage;
