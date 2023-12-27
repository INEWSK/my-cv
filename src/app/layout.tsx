import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "YUEN Yik Chun - Resume",
  description:
    "Personal web resume built with Next.js, made by heart, modified by hand.",
  keywords: [
    "Resume",
    "CV",
    "Next.js",
    "React",
    "Web Developer",
    "Mobile Application Developer",
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
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={ibmPlexSerif.className}>{children}</body>
    </html>
  );
}
