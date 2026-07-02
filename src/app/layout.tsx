import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { seo, profile } from "@/content/profile";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${profile.links.site}`),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: seo.ogTitle,
    description: seo.ogDescription,
    siteName: seo.title,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f3ee",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Enable the hidden pre-reveal state only when JS is active, before
            paint — so content is never blank without JS and there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-rv')" }} />
      </head>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-[var(--line2)] focus:bg-[var(--paper2)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--ink)]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="top">{children}</main>
      </body>
    </html>
  );
}
