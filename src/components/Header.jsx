import React from "react";
import { motion } from "framer-motion";

function Header({ language }) {
  const title =
    language === "fr" ? "Bienvenue sur ma page" : "Welcome to my profile";

  const description =
    language === "fr"
      ? "Développeuse web en quête constante de nouveaux défis."
      : "Web developer constantly seeking new challenges.";

  return (
    <header>
      <img src="/photo.jpg" alt="Photo de profil" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>

      <motion.p
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {description}
      </motion.p>
    </header>
  );
}

export default Header;
