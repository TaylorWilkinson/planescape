import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Planescape Blog",
  description: "where the notes can live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
