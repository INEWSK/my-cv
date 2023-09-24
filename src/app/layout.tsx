import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "YUEN Yik Chun - Resume",
  description:
    "Web resume built with Next.js, made by heart, modified by hand.",
  keywords: [
    "Resume",
    "CV",
    "Next.js",
    "React",
    "Web Developer",
    "Mobile Application Developer",
    "TypeScript",
  ],
  themeColor: "#000000",
  authors: {
    name: "Yuji Kurokawa",
    url: "https://inewsk.me",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexSerif.className}>{children}</body>
    </html>
  );
}
