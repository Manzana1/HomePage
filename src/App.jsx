import { useState } from "react";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("fr");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="app">
      <button onClick={() => handleLanguageChange("fr")}>Français</button>
      <button onClick={() => handleLanguageChange("en")}>English</button>

      <Header language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
