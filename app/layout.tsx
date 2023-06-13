import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import Navbar from "./components/navigation/navbar";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Royalust",
  description: "Enter yourself into the world of Royalust",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Providers>
          <div className="h-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
