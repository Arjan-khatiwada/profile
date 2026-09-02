import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { PROJECTS } from '../data/projects';

function ProjectLink({ project }) {
  if (project.link) {
    if (project.external) {
      return (
        <a
          href={project.link}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-external-link-alt"></i> View Project
        </a>
      );
    }

    return (
      <span className="project-link">
        <i className="fas fa-external-link-alt"></i> View Project
      </span>
    );
  }

  return (
    <span className="project-link">
      <i className="fas fa-external-link-alt"></i> {project.linkLabel}
    </span>
  );
}

function ProjectCard({ project, onProjectClick }) {
  return (
    <article
      className="project-card"
      onClick={() => onProjectClick(project)}
      style={{ cursor: project.link ? 'pointer' : 'default' }}
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="project-photo"
          loading="lazy"
        />
        <div className="project-overlay">
          <i className={`${project.icon} project-icon`}></i>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span className="tech-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="project-links">
          <ProjectLink project={project} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const navigate = useNavigate();
  const featuredProject = PROJECTS.find((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured);

  const handleProjectClick = (project) => {
    if (!project.link) return;
    if (project.external) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(project.link);
    }
  };

  return (
    <>
      <SEO
        title="Projects & System Deployments"
        description="A showcase of Arjan Khatiwada's full stack software deployments, AI-powered platforms, marketplaces, and web applications."
      />
      <div className="container pt-5 px-3 px-md-5">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              REPOSITORY STATUS: ACTIVE
            </div>
            <h1 className="section-heading">System Deployments</h1>
          </div>
        </div>

        {featuredProject ? (
          <article
            className="featured-project"
            onClick={() => handleProjectClick(featuredProject)}
            style={{ cursor: featuredProject.link ? 'pointer' : 'default' }}
          >
            <span className="featured-project-badge">FEATURED_BUILD</span>
            <div className="featured-project-image">
              <img
                src={featuredProject.image}
                alt={`Screenshot of ${featuredProject.title}`}
                className="project-photo"
                loading="lazy"
              />
              <div className="project-overlay">
                <i className={`${featuredProject.icon} project-icon`}></i>
              </div>
            </div>
            <div className="featured-project-content">
              <h2 className="project-title">{featuredProject.title}</h2>
              <p className="project-description">{featuredProject.description}</p>
              <div className="project-tech">
                {featuredProject.tech.map((t) => (
                  <span className="tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <ProjectLink project={featuredProject} />
              </div>
            </div>
          </article>
        ) : null}

        <div className="projects-page-grid">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

