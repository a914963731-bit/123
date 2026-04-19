import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 爆款文案生成器",
  description: "一键生成爆款标题 + 情绪文案 + 热门标签",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}