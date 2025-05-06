import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("fr");

  //loading the stocked lauguage
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  //update localStorage to all changes
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="app">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <Header language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
