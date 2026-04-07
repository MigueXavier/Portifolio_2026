import logoColorida from '../assets/logo_colorida.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "PetCare",
      description: "Uma aplicação em flutter que permite facíl comunicação e agendamento de serviços entre petshops de donos de pet.",
      tech: ["Flutter", "Firebase"],
      image: logoColorida,
      links: {
        github: "https://github.com/MigueXavier/PetCare.git",
        demo: "#"
      }
    },
    {
      id: 2,
      title: "World cup encyclopedia",
      description: "Um site em que será possivel exbibir diversas informações sobre o maior evento do esporte mundial de forma dinâmica e agradavel.",
      tech: ["HTML", "CSS", "Java Script"],
      image: "https://upload.wikimedia.org/wikipedia/pt/d/d7/Logo_copa_2026.png",
      links: {
        github: "https://github.com/MigueXavier/World_cup_encyclopedia.git",
        demo: "#"
      }
    }/*,
    {
      id: 3,
      title: "Project Name 3",
      description: "Brief description of your mobile app and its key features",
      tech: ["Swift", "SwiftUI", "CoreData"],
      image: "https://via.placeholder.com/400x300",
      links: {
        github: "#",
        demo: "#"
      }
    }*/
  ];

  return (
    <section id="projects" className="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
