import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { profile } from "@/content/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thakurdiv.com";

const description =
  "Software engineer building full-stack products end-to-end — founding developer at Ziiro and engineer at Amdocs. TypeScript, React, Node, and .NET.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    profile.name,
    "Software Engineer",
    "Full-Stack Developer",
    "Ziiro",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

// Sets the theme class before paint to avoid a flash. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressLocality: profile.location },
  sameAs: profile.socials
    .filter((s) => s.icon !== "mail")
    .map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          {/* Without JS, scroll-reveal can't fire — keep all content visible. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <GridBackground />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
