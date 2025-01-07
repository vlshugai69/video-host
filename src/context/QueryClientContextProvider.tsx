"use client";

import { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { baseQueryClient } from "@/api/queryClient";

export default function QueryClientContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryClientProvider client={baseQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
