import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "../globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
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
      <body className={quicksand.className + " w-screen h-screen block"}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
