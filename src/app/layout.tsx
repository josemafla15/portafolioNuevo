import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Jose Manuel Mafla Munoz",
  description: "Mi portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
