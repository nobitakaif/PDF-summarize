import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import {  Header2 } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";


const fonstSans = FontSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "Sommaire - AI-Powered PDF Summarization",
  description: "Save hours of reading time. Transform lengthy PDF into clear, accurate summaires in seconds with our advanced AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`font-sans ${fonstSans.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <div className="relative flex min-h-screen flex-col ">
        
          <Header2/>
            
            <main className="flex-1">
            
              {children}
              
              </main>
            
          <Footer/>
        </div>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
