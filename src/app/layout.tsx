import { Red_Hat_Display } from "next/font/google";
import type { Metadata } from "next";
import type { WithChildren } from "@/types";
import "@/styles/index.css";

const redHatDisplay = Red_Hat_Display({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "Phenomenon Next JS Template",
  description: "Generated by create next app",
};

const RootLayout: React.FC<WithChildren<unknown>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={redHatDisplay.variable}>{children}</body>
    </html>
  );
};

export default RootLayout;
