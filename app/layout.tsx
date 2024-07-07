import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";
import { Toaster } from "@/components/ui/toaster";
import IsFetchingProvider  from "@/providers/IsFetchingProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouPoder.com - Create Multilingual Podcasts Instantly with AI",
  description: "Create multilingual podcasts instantly with AI. YouPoder lets you generate high-quality podcasts in various languages on the fly, enhancing global reach and engagement.",
  icons: {
    icon: '/icons/miclogo.svg'
  },
  keywords: ["podcast", "generate podcast", "create podcast with ai", "multilingual podcasts"],
  openGraph: {
    images: '/opengraph-image.PNG',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <IsFetchingProvider>
        <AudioProvider>
          <body className={`${manrope.className}`}>
              <Toaster />
            {children}
          </body>
          {/* <Script async src="https://js.stripe.com/v3/pricing-table.js"></Script> */}
          </AudioProvider>
        </IsFetchingProvider>
      </html>
    </ConvexClerkProvider>
  );
}
