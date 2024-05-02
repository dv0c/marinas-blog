import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Providers/theme-provider";
import LoadingIndicator from "@/components/Providers/LoadingIndicator";

const inter = Schibsted_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marina's Blog",
  description: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingIndicator>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LoadingIndicator>
      </body>
    </html>
  );
}
