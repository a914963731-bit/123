import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "AI 爆款文案生成器",
  description: "一键生成爆款标题 + 情绪文案 + 热门标签",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}