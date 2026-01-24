import { Fredoka } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const fredoka = Fredoka({
  subsets: ["latin"],
});

export const metadata = {
  title: "Clases de inglés online — Talkers.cl",
  description: "Clases de inglés online, prácticas y personalizadas.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${fredoka.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
