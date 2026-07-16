import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { themeBootstrapScript } from "@/lib/theme";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CASE // Cyberdeck Portfolio",
  description:
    "Neuromancer-inspired developer portfolio — cyberdeck terminal interface with archives, protocols, and signal uplink.",
  openGraph: {
    title: "CASE // Cyberdeck Portfolio",
    description:
      "Immersive CRT cyberdeck portfolio for a cyber-developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeBootstrapScript() }}
        />
      </head>
      <body className="min-h-full font-mono antialiased">{children}</body>
    </html>
  );
}
