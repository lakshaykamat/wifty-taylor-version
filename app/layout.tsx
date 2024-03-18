import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wifty - Taylor Version",
  description:
    "Dive into the enchanting world of Taylor Swift with quizzes on her life and albums. Stay updated with Taylor's latest news, earn badges, and showcase your fan ranking!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const background_colors = ["#F1E4C3", "#C6A969", "#E8C872"];
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <nav className='flex bg-black h-16'>
        </nav>
        <main className="max-w-6xl mx-auto px-6 py-6">
          {children}
        </main>
        <footer className="flex justify-between items-center bg-black py-5  text-white px-28 font-sans">
          <p>© Copyright 2024</p>
          <div title="Instagram" className="flex flex-row-reverse gap-3">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram hover:text-pink-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <p>Instagram</p>
          </div>
        </footer>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header /> */}
        {/* <main className="px-10 pb-12 max-w-7xl mx-auto">{children}</main> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
