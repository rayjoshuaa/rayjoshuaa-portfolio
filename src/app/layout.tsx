import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter as FontSans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { JsonLd } from "@/components/json-ld";
import { PageBackground } from "@/components/page-background";
import dynamic from "next/dynamic";

// Loaded after first paint: keeps the command palette (and its dialog code) off the critical path.
const CommandPalette = dynamic(
  () => import("@/components/command-palette").then((m) => m.CommandPalette),
  { ssr: false }
);

// Client-only widgets: the quick-question chat box and the cookie consent banner.
const ChatBox = dynamic(
  () => import("@/components/chat-box").then((m) => m.ChatBox),
  { ssr: false }
);
const CookieConsent = dynamic(
  () => import("@/components/cookie-consent").then((m) => m.CookieConsent),
  { ssr: false }
);
import { SoundProvider } from "@/components/sound-provider";
import { BackToTop } from "@/components/back-to-top";
import { LoadingScreen } from "@/components/loading-screen";
import { LineButton } from "@/components/line-button";

// Desktop fine-pointer only, and loaded after first paint so it never touches LCP.
const SmoothCursor = dynamic(
  () => import("@/components/ui/smooth-cursor").then((m) => m.SmoothCursor),
  { ssr: false }
);

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
  variable: "--font-display",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Ray Joshua Balingkit Portfolio",
    template: `%s | Ray Joshua Balingkit Portfolio`,
  },
  description: "Ray Joshua A. Balingkit — ICT & Robotics Teacher at SIAMIS, Bangkok. I build WordPress & CMS websites, manage social media, and develop custom web apps that help schools and businesses get clients.",
  keywords: ["Ray Joshua", "Ray Joshua Balingkit", "ICT Teacher", "Robotics Teacher", "Virtual Assistant", "WordPress Developer", "Freelance Web Developer", "Web Developer Bangkok", "Social Media Manager", "Social Media Management", "CMS Website", "Custom Web Development", "School Management System", "EdTech", "Bangkok", "SIAMIS"],
  authors: [{ name: "Ray Joshua", url: DATA.url }],
  creator: "Ray Joshua",
  publisher: "Ray Joshua",
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: "Ray Joshua Balingkit Portfolio",
    description: "ICT & Robotics Teacher at SIAMIS, Bangkok — educator, software developer, and virtual-assistant partner for web, CMS, and social media.",
    url: DATA.url,
    siteName: "Ray Joshua Balingkit Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}${DATA.avatarUrl}`,
        width: 1200,
        height: 630,
        alt: "Ray Joshua — ICT & Robotics Teacher"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ray Joshua Balingkit Portfolio',
    description: 'ICT & Robotics Teacher at SIAMIS, Bangkok — educator, software developer, and virtual assistant.',
    images: [`${DATA.url}${DATA.avatarUrl}`],
    creator: '@ry_devs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/ray-circle-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/ray-circle-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/ray-circle-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/ray-circle-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/ray-circle-180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicons/android-icon-192x192.png",
      },
      {
        rel: "manifest",
        url: "/favicons/manifest.json",
      },
    ],
  },
  manifest: "/favicons/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ray Joshua Balingkit Portfolio",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
    "msapplication-config": "/favicons/browserconfig.xml",
    "theme-color": "#ffffff",
    "generator": "Next.js",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, fontDisplay.variable, fontMono.variable, "font-sans antialiased")}>
        {/* Microsoft Clarity analytics */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "z6nkeyegxg");`}
        </Script>
        {/* Background container */}
        <div className="fixed inset-0 z-[-1]">
          <PageBackground />
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto w-[92%] pt-20 sm:pt-24 pb-24 sm:w-[86%] lg:w-[80%] lg:max-w-[1500px]">
          <JsonLd />
          <ScrollProgress />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <SoundProvider>
              <TooltipProvider delayDuration={0}>
                <LoadingScreen />
                {children}
                <Navbar />
                <CommandPalette />
                <ChatBox />
                <CookieConsent />
                <LineButton />
                <BackToTop />
                <SmoothCursor />
              </TooltipProvider>
            </SoundProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
