export const metadata = {
  title: "Juan Manuel Oddone | Full Stack Developer",
  description: "Full Stack Developer | AI & Automation | Remote",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
