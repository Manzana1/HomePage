import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("fr");

  return (
    <div className="app">
      <Navbar language={language} setLanguage={setLanguage} />
      <Header language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
