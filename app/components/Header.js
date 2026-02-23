"use client";

import { useLanguage, translations } from "../context/LanguageContext";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <header style={styles.header}>
      <div style={styles.logo}>JM Fullstack</div>

      <nav style={styles.nav}>
        <a href="#projects">{t.navProjects}</a>
        <a href="#contact">{t.navContact}</a>
      </nav>

      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={styles.select}
      >
        <option value="en">🇺🇸 EN</option>
        <option value="es">🇪🇸 ES</option>
        <option value="fr">🇫🇷 FR</option>
        <option value="de">🇩🇪 DE</option>
        <option value="it">🇮🇹 IT</option>
        <option value="pt">🇧🇷 PT</option>
        <option value="ru">🇷🇺 RU</option>
        <option value="zh">🇨🇳 中文</option>
        <option value="ja">🇯🇵 日本語</option>
      </select>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    backdropFilter: "blur(20px)",
    background: "rgba(0,0,0,0.4)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    zIndex: 100,
  },
  logo: {
    fontWeight: 700,
    fontSize: 18,
  },
  nav: {
    display: "flex",
    gap: 30,
  },
  select: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    padding: "6px 10px",
    borderRadius: 8,
  },
};
