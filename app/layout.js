import "./globals.css";

export const metadata = {
  title: "JM Fullstack — Web, Mobile, Automation & AI",
  description:
    "A fast, no-fluff dev studio: web & mobile builds + automation and AI. Ship in days. Remote worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
