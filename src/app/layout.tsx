import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ADAPTISERV",
  description: "ADAPTISERV, votre partenaire pour la gestion de votre énergie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr,en">
      <body
          className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
