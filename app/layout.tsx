import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyderabad Housing Consultancy - Future-Ready Property Solutions",
  description: "Experience next-generation property management with AI-powered insights, seamless loan processing, and intelligent real estate solutions in Hyderabad.",
  authors: [{ name: "Hyderabad Housing Consultancy" }],
  openGraph: {
    title: "Hyderabad Housing Consultancy - Future-Ready Property Solutions",
    description: "AI-powered property management, home loans, and real estate solutions in Hyderabad. Get instant loan approvals and smart property analytics.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
