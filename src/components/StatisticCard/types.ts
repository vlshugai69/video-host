import type { WithChildren } from "@/types";
import type { LucideIcon } from "lucide-react";

export type StatisticCardProps = WithChildren<{
  title: string;
  description: string;
  Icon: LucideIcon;
}>;
