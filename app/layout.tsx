import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { BottomNav } from "./components/BottomNav";
import { ScrollProgress } from "./components/ScrollProgress";
import { SmoothScroll } from "./components/SmoothScroll";
import { Footer } from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EduChain",
  description: "Own Your Learning. Verify Your Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} data-theme="dark" suppressHydrationWarning>
      <body className="pb-20 lg:pb-0">
        <ThemeProvider>
          <SmoothScroll>
            <ScrollProgress />
            {children}
            <Footer />
            <BottomNav />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
