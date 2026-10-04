import "./globals.css";

export const metadata = {
  title: "Harmanjeet Singh – Full-Stack Developer",
  description:
    "Harmanjeet Singh is a full-stack developer building web apps and automated tests for logistics software.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%236366f1'/%3E%3Cstop offset='50%25' stop-color='%23a855f7'/%3E%3Cstop offset='100%25' stop-color='%23ec4899'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='14' fill='%230a0a0f'/%3E%3Crect x='2' y='2' width='60' height='60' rx='12' fill='none' stroke='url(%23g)' stroke-width='2'/%3E%3Cpath d='M24 20 L14 32 L24 44 M40 20 L50 32 L40 44 M36 18 L28 46' stroke='url(%23g)' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E",
    apple:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%236366f1'/%3E%3Cstop offset='50%25' stop-color='%23a855f7'/%3E%3Cstop offset='100%25' stop-color='%23ec4899'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='14' fill='%230a0a0f'/%3E%3Cpath d='M24 20 L14 32 L24 44 M40 20 L50 32 L40 44 M36 18 L28 46' stroke='url(%23g)' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="loading min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
