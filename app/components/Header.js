"use client";

import { useLanguage, translations } from "../context/LanguageContext";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <div style={styles.logo}>JM<span style={{opacity:0.6}}> Agency</span></div>

        <nav style={styles.nav}>
          <a href="#projects" style={styles.link}>{t.navProjects}</a>
          <a href="#contact" style={styles.link}>{t.navContact}</a>
        </nav>

        <div style={styles.right}>
          <a href="#contact" style={styles.cta}>
            Start →
          </a>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={styles.select}
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
            <option value="it">IT</option>
            <option value="pt">PT</option>
            <option value="ru">RU</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    backdropFilter: "blur(24px)",
    background: "rgba(10,10,18,0.6)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    zIndex: 100,
  },

  inner: {
    maxWidth: 1300,
    margin: "0 auto",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px", // más adentro responsive
  },

  logo: {
    fontWeight: 700,
    fontSize: 20,
    letterSpacing: -0.5,
  },

  nav: {
    display: "flex",
    gap: 40,
  },

  link: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.75)",
    fontWeight: 500,
    position: "relative",
    transition: "all 0.3s ease",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },

  cta: {
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: 999,
    fontWeight: 600,
    fontSize: 14,
    background: "linear-gradient(90deg,#6C63FF,#00D4FF)",
    color: "white",
    transition: "all 0.3s ease",
  },

  select: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "white",
    padding: "8px 12px",
    borderRadius: 10,
    fontSize: 13,
    outline: "none",
  },
};
