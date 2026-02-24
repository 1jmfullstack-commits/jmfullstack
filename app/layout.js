import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata = {
  title: "JM Fullstack – Web, Mobile & AI Systems",
  description: "Full-Stack Developer | MVP Builder | Automation & AI Integrations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
