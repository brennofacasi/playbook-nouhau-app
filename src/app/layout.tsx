import "./globals.scss";
import { Manrope } from "next/font/google";
import Sidebar from "@/components/Sidebar";

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
