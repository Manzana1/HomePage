import { useState } from "react";

function Navbar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="nav">
      <div className="logo">Mandana</div>

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
            onClick={() => setLanguage("fr")}
            className={language === "fr" ? "active" : ""}
          >
            FR
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={language === "en" ? "active" : ""}
          >
            EN
          </button>
        </li>
      </ul>

      {/* <div className="lang-switch">
        <button
          onClick={() => setLanguage("fr")}
          className={language === "fr" ? "active" : ""}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={language === "en" ? "active" : ""}
        >
          EN
        </button>
      </div> */}
    </nav>
  );
}

export default Navbar;
