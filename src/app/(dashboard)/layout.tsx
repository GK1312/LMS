import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "../globals.css";
import HeaderComponent from "../components/dashboard/Header";
import SessionAuthProvider from "@/providers/SessionProvider";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-quicksand",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Learning Management System",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${poppins.variable} font-poppins`}
      >
        <SessionAuthProvider>
          <ThemeProvider>
            <HeaderComponent />
            {children}
          </ThemeProvider>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
