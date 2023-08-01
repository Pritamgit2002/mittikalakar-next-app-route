import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Preloader from "@/components/preloader/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mittikalakar",
  description: "Handmade Item Selling Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-col justify-between">
          <Preloader />
          <div className="h-[100vh]">
            <video src="/assets/bg-video.mp4" className="absolute object-cover h-full" autoPlay loop muted />
            <Navbar style={{ zIndex: 10 }} />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
