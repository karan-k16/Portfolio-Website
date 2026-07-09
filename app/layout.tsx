import type { Metadata } from "next";
import { Inter, Fraunces, Dancing_Script } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import InteractiveDots from "@/components/InteractiveDots";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.name,
  description: profile.bio,
  openGraph: {
    title: profile.name,
    description: profile.bio,
    type: "website",
  },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'dark');
    if (theme === 'light') document.documentElement.classList.add('light');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${dancing.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <div className="accent-bar" aria-hidden="true" />
        <InteractiveDots />
        {children}
      </body>
    </html>
  );
}
