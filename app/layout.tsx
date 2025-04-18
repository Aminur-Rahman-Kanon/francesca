import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"
import { ContextProvider } from '../components/contextProvider/contextProvider';
import Sidedrawer from "@/components/sidedrawer/sidedrawer";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Warning from "@/components/warning/warning";
import Backdrop from "@/components/backdrop/backdrop";
import Test from "@/components/test/test";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "FRANCESCA",
  description: "The Finest English Messuesue"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <ContextProvider>
          <Warning />
          <Backdrop />
          <Test>
            <Sidedrawer />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </Test>
        </ContextProvider>
      </body>
    </html>
  )
}



import './globals.css'
