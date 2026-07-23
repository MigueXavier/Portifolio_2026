import logoColorida from '../assets/logo_colorida.png';
import logoSolidus from '../assets/logo_solidus.png'
import Personagem from '../assets/estrela.png'

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
      image: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/2026_FIFA_World_Cup_logo.svg/1920px-2026_FIFA_World_Cup_logo.svg.png",
      links: {
        github: "https://github.com/MigueXavier/World_cup_encyclopedia.git",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Solidus",
      description: "Plataforma web para gestão e controle financeiro de ONGs, facilitando a prestação de contas, o gerenciamento de doações e a transparência de recursos.",
      tech: ["HTML", "CSS", "Java Script", "Json Server"],
      image: logoSolidus,
      links: {
        github: "https://github.com/MigueXavier/Solidus.git",
        demo: "https://motivated-creation-production.up.railway.app"
      }
    },
    {
      id: 4,
      title: "Perdido no Algoritimo",
      description: "Jogo de puzzle interativo onde o jogador supera desafios e navega por labirintos aplicando lógica de programação e conceitos fundamentais de algoritmos.",
      tech: ["Python", "Pygame", "Json"],
      image: Personagem,
      links: {
        github: "https://github.com/MigueXavier/trabalho_pygame.git",
        demo: "#"
      }
    }
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
