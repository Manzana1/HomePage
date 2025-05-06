import React from "react";

function Projects({ language }) {
  const projects = [
    {
      title: {
        fr: "🌱 Boutique de plantes",
        en: "🌱 Plant shop",
      },
      url: "https://urban-roots-fawn.vercel.app/",
      description: {
        fr: "Une boutique en ligne faite avec React, incluant un panier dynamique.",
        en: "An online store built with React, featuring a dynamic shopping cart.",
      },
    },
    {
      title: {
        fr: "🍪 Minuteur à Biscuits",
        en: "🍪 Cookie Timer",
      },
      url: "https://biscuit-timer.vercel.app/",
      description: {
        fr: "Un petit projet React où chaque étape d’une recette de biscuits démarre un compte à rebours personnalisé.",
        en: "A small React project where each step of a cookie recipe starts a custom countdown.",
      },
    },
    {
      title: {
        fr: "🌎 Projet de création d'API avec Tailwind",
        en: "🌎 API Project with Tailwind",
      },
      url: "https://countries-data-psi.vercel.app/",
      description: {
        fr: "En cours...",
        en: "In progress...",
      },
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>{language === "fr" ? "Mes projets" : "My projects"}</h2>
      <ul>
        {projects.map((project, index) => (
          <li className="project-card" key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3>{project.title[language]}</h3>
            </a>
            <p>{project.description[language]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Projects;
