function Footer({ language }) {
  return (
    <footer id="contact">
      <p>© {new Date().getFullYear()} Mandana Pelletier</p>
      <p className="contact-link">
        {language === "fr" ? (
          <a href="mailto:mandana-6@live.ca">
            Contact <br />
            <img src="/mail.png" alt="email" className="email-icon" />
          </a>
        ) : (
          <a href="mailto:mandana-6@live.ca">
            Contact <br />
            <img
              src="/mail.png"
              alt="email"
              className="email-icon"
              title="Contact"
            />
          </a>
        )}
        ·
        <a
          href="https://www.linkedin.com/in/mandana-pelletier-10677292"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <br></br>
          <img src="/linkedin.png" alt="LinkedIn" className="linkedin-icon" />
        </a>
        ·
        <a href="/resume-fr.pdf" target="_blank" rel="noopener noreferrer">
          CV<br></br>
          <img
            src="/external-link.png"
            alt="external-link"
            className="external-link-icon"
            LAB
          />
        </a>
      </p>
    </footer>
  );
}
export default Footer;
