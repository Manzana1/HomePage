function Footer({ language }) {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Mandana Pelletier</p>
      <p>
        {language === "fr" ? (
          <a href="mailto:mandana-6@live.ca">Me contacter</a>
        ) : (
          <a href="mailto:mandana-6@live.ca">Contact</a>
        )}
        <a
          href="https://www.linkedin.com/in/mandana-pelletier-10677292"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        ·
        <a href="/resume-fr.pdf" target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </p>
    </footer>
  );
}
export default Footer;
