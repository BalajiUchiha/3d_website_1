import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "WpDev Keyboard",
  description: "High-performance editorial landing page for WpDev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-black/90 selection:bg-black/10 selection:text-black bg-fog relative`}>
        {children}
      </body>
    </html>
  );
}
