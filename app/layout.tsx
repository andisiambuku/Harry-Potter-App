import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const inter = Inter({subsets: ['latin'], });


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
        <html lang="en" className={inter.className}>
            <body>
            <Navbar/>
            {children}
            <Footer/>
            </body>
        </html>
    )
}