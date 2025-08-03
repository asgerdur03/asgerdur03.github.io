import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "My Website",
  description: "Page to store my projects",
  authors: [{ name: "Ásgerður Júlía Gunnarsdóttir", url: "http://asgerdur03.github.io/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="content">
          {children}
          <p className="vinnsla">Þessi síða er i vinnslu</p>
        </main>
        <Footer />
      </body>
    </html>
  );
}
