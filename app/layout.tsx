import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

export const quicksand = Quicksand({weight: '400', subsets: ['latin'], });

export const metadata: Metadata = {
  title: "Harry Potter App",
  description: "Harry Potter App",
};

export default function RootLayout({
    children,
}:{
    children:React.ReactNode
})
{
    return(
        <html lang="en" className={quicksand.className}>
            <body>
            <Navbar/>
            {children}
            <Footer/>
            </body>
        </html>
    )
}