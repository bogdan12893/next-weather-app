import "./globals.css";
import { Inter } from "next/font/google";
import ThemeSwitch from "./components/ThemeSwitch";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calm Weather App",
  description: "Calm Weather App with Nuxt13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-lh-cream dark:bg-dk-navy")}>
        <Providers>
          <ThemeSwitch />
          {children}
        </Providers>
      </body>
    </html>
  );
}
