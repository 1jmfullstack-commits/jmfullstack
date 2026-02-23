export default function Home() {
  return (
    <main style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      flexDirection: "column",
      background: "#0a0a0a",
      color: "#fff"
    }}>
      <h1 style={{ fontSize: "3rem", margin: 0 }}>
        Juan Manuel Oddone
      </h1>
      <p style={{ opacity: 0.7 }}>
        Full Stack Developer | AI & Automation
      </p>
    </main>
  )
}
