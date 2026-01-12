import { Dosis, Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const dosis = Dosis({
  subsets: ["latin"],
});

const fredoka = Fredoka({
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Clases de inglés online — Talkers.cl",
  description: "Clases de inglés online, prácticas y personalizadas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dosis.className} antialiased min-h-screen flex flex-col`}
      >
        <div className="flex-1 flex items-center">
          <div className="w-full flex flex-col md:flex-row">
            <Header />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
