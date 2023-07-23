import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Preloader from "@/components/preloader/Preloader";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mittikalakar',
  description: 'Handmade Item Selling Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-col justify-between">
        <Preloader />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
