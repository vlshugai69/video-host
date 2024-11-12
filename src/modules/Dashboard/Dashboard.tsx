"use client";

import { memo } from "react";
import { Button } from "@/ui/button";

const Dashboard: React.FC = () => {
  return (
    <div className="text-3xl bg-black-900 font-bold underline">
      {/* <SidebarProvider>
    <AppSidebar />
  </SidebarProvider> */}

      <Button variant="secondary">Click me</Button>
    </div>
  );
};

export default memo(Dashboard);
