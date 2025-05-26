import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azzam Majdi Faraj - AI Engineer & Full-Stack Developer",
  description:
    "Software Engineer specializing in Generative AI, LangChain, vector databases, and full-stack development. Expert in building intelligent systems with OpenAI, Gemini, DeepSeek, and modern web technologies.",
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "Generative AI",
    "LangChain",
    "Vector Databases",
    "Full-Stack Developer",
    "TypeScript",
    "Python",
    "Next.js",
    "OpenAI",
    "Gemini",
    "DeepSeek",
    "Chroma",
    "Milvus",
    "RAG",
    "Chatbot Development",
    "NLP",
    "Machine Learning",
    "Jordan Developer",
  ],
  authors: [{ name: "Azzam Majdi Faraj" }],
  creator: "Azzam Majdi Faraj",
  publisher: "Azzam Majdi Faraj",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azzam-portfolio.vercel.app",
    title: "Azzam Majdi Faraj - AI Engineer & Full-Stack Developer",
    description:
      "Software Engineer specializing in Generative AI, LangChain, vector databases, and full-stack development.",
    siteName: "Azzam Majdi Faraj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azzam Majdi Faraj - AI Engineer & Full-Stack Developer",
    description:
      "Software Engineer specializing in Generative AI, LangChain, vector databases, and full-stack development.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://azzam-portfolio.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Azzam Majdi Faraj",
              jobTitle: "Software Engineer",
              description:
                "Software Engineer specializing in Generative AI, LangChain, vector databases, and full-stack development",
              url: "https://azzam-portfolio.vercel.app",
              sameAs: [
                "https://github.com/AZZIE2000",
                "https://linkedin.com/in/azzam-faraj",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Amman",
                addressCountry: "Jordan",
              },
              email: "azzam.faraj0@gmail.com",
              telephone: "0778086316",
              knowsAbout: [
                "Generative AI",
                "LangChain",
                "Vector Databases",
                "Full-Stack Development",
                "TypeScript",
                "Python",
                "Next.js",
                "OpenAI",
                "Machine Learning",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
