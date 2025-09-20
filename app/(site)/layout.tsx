import type { Metadata } from "next";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
// import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Planescape Blog",
  description: "where the notes can live",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="max-w-5xl mx-auto py-10"
      >
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent hover:text-pink-500 transition"
          >
            Home
          </Link>
          <div className="flex items-center gap-5 text-small text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:text-pink-500 transition"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
