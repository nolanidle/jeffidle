import type { Metadata } from "next";
import { Press_Start_2P, IBM_Plex_Mono, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const retroFont = Press_Start_2P({
  variable: "--font-retro",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeff Idle | Strategic Workforce Leader | JD, MBA",
  description: "Strategic Workforce Leader with 20+ years experience in analytics, workforce planning, and total rewards. Built 4 analytics teams from scratch across financial services, energy, construction, and agribusiness.",
  keywords: ["workforce analytics", "HR data science", "workforce planning", "total rewards", "strategic HR", "Jeff Idle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${retroFont.variable} ${monoFont.variable} ${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
