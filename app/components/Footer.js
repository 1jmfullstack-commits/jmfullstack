export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        <div>
          <h3>JM Fullstack</h3>
          <p>Web · Mobile · AI Systems</p>
        </div>

        <div>
          <h4>Services</h4>
          <p>High-Converting Websites</p>
          <p>Custom SaaS</p>
          <p>Automation Systems</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>hola@jmfullstack.lat</p>
        </div>
      </div>

      <div style={styles.copy}>
        © {new Date().getFullYear()} JM Fullstack. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 120,
    padding: "80px 40px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 40,
  },
  copy: {
    marginTop: 60,
    opacity: 0.5,
    fontSize: 12,
  },
};
