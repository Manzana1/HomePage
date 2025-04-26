function Projects() {
  const projects = [
    {
      title: "🌱 Boutique de plantes",
      url: "https://urban-roots-fawn.vercel.app/",
      description:
        "Une boutique en ligne faite avec React, incluant un panier dynamique.",
    },
    {
      title: "🍪 Minuteur à Biscuits",
      url: "https://biscuit-timer.vercel.app/",
      description:
        "Un petit projet React où chaque étape d’une recette de biscuits démarre un compte à rebours personnalisé.",
    },
    {
      title: "Projet de création d'API avec Tailwind",
      url: "https://ton-projet-3.vercel.app",
      description: "En cours...",
    },
  ];

  return (
    <section className="projects">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Voir le projet →
          </a>
        </div>
      ))}
    </section>
  );
}
export default Projects;
