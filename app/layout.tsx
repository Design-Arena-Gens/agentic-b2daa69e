export const metadata = {
  title: "Habit Tracker",
  description: "Simple, fast habit tracking that sticks",
};

import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="text-lg font-semibold">
              Habit Tracker
            </Link>
            <nav className="text-sm text-gray-600">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">Star</a>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t bg-white">
          <div className="container py-6 text-center text-sm text-gray-500">
            Built with Next.js ? Local-first storage
          </div>
        </footer>
      </body>
    </html>
  );
}
