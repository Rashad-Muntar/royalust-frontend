import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import Navbar from "./components/navigation/navbar";

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
          <div className="h-full">
            <ReduxProvider>{children}</ReduxProvider>
          </div>
      </body>
    </html>
  );
}
