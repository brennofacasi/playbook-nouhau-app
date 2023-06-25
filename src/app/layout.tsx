import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Manrope } from "next/font/google";

const inter = Manrope({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata = {
  title: "Playbook Nouhau",
  description: "Playbook Nouhau",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main id='wrapper'>
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
