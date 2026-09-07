import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "../globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bakersfielddocprep.com"),
  title: {
    default: "Bakersfield Doc Prep Co. | California Legal Document Assistant",
    template: "%s",
  },
  description:
    "Professional, organized legal document preparation from a registered and bonded California Legal Document Assistant, LDA #232.",
  icons: {
    icon: "/images/brand-mark.png",
    shortcut: "/images/brand-mark.png",
  },
  openGraph: {
    title: "Legal paperwork. Clearly handled.",
    description:
      "Professional document preparation without the attorney retainer.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakersfield Doc Prep Co.",
    description: "Legal paperwork. Clearly handled.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
