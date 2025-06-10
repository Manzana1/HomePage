import { useState } from "react";

function Navbar({ language, onLanguageChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="nav">
      <img src="/logo.svg" alt="Logo" className="logo" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#projects">{language === "fr" ? "Projets" : "Projects"}</a>
        </li>
        <li>
          <a href="#about">{language === "fr" ? "À propos" : "About"}</a>
        </li>
        <li>
          <a href="#contact">
            {language === "fr" ? "Me contacter" : "Contact"}
          </a>
        </li>
        <li className="lang-switch">
          <button
            onClick={() => onLanguageChange("fr")}
            className={language === "fr" ? "active" : ""}
          >
            FR
          </button>
          <button
            onClick={() => onLanguageChange("en")}
            className={language === "en" ? "active" : ""}
          >
            EN
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
