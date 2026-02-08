import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MojoDocs | Privacy-First Local ToolSuite",
  description: "High-performance browser tools that process data on your machine, not our servers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">
        {children}
      </body>
    </html>
  );
}
