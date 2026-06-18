// Footer.jsx – stopka strony

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Dane pochodzą z{" "}
        <a
          href="https://www.freetogame.com/api-doc"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          FreeToGame API
        </a>
      </p>
      <p className="footer-text">GameDiscovery © 2026</p>
    </footer>
  );
}

export default Footer;
