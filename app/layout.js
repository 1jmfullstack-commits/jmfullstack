import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "JM Fullstack — Web, Mobile & AI Systems",
  description: "Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0b0b12", color: "white" }}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
