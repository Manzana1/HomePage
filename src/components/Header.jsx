import React from "react";

function Header({ language }) {
  return (
    <header>
      <img src="/photo.jpg" alt="Photo de profil" />

      {language === "fr" ? (
        <h1>Bienvenue sur ma page</h1>
      ) : (
        <h1>Welcome to my profile</h1>
      )}
      <p>
        {language === "fr"
          ? "Développeuse web en quête constante de nouveaux défis."
          : "Web developer constantly seeking new challenges."}
      </p>
    </header>
  );
}

export default Header;
