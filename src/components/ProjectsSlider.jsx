import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setSlidesPerView(1);
      else if (window.innerWidth < 1200) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return slidesPerView;
}

export default function ProjectsSlider() {
  const navigate = useNavigate();
  const slidesPerView = useSlidesPerView();
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);

  const totalPages = Math.max(1, Math.ceil(PROJECTS.length / slidesPerView));
  // Clamp during render (no effect needed) in case slidesPerView shrank totalPages
  const activeSlide = Math.min(currentSlide, totalPages - 1);

  const goPrev = () => setCurrentSlide((s) => Math.max(0, Math.min(s, totalPages - 1) - 1));
  const goNext = () => setCurrentSlide((s) => Math.min(totalPages - 1, Math.min(s, totalPages - 1) + 1));

  const handleProjectClick = (project) => {
    if (!project.link) return;
    if (project.external) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(project.link);
    }
  };

  return (
    <div className="col-12">
      <h5 className="text-uppercase mb-3">Featured Projects</h5>
      <div className="projects-container">
        <div
          className="projects-slider"
          id="projectsSlider"
          ref={trackRef}
          style={{
            transform:
              slidesPerView === 1
                ? `translateX(-${activeSlide * 100}%)`
                : 'none',
          }}
        >
          {PROJECTS.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => handleProjectClick(project)}
              style={{ cursor: project.link ? 'pointer' : 'default' }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-photo" />
                <div className="project-overlay">
                  <i className={`${project.icon} project-icon`}></i>
                </div>
              </div>
              <div className="project-content">
                <h6 className="project-title">{project.title}</h6>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link ? (
                    project.external ? (
                      <a
                        href={project.link}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-external-link-alt"></i> View Project
                      </a>
                    ) : (
                      <span className="project-link">
                        <i className="fas fa-external-link-alt"></i> View Project
                      </span>
                    )
                  ) : (
                    <span className="project-link">
                      <i className="fas fa-external-link-alt"></i> {project.linkLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <>
            <button
              className="slider-btn prev-btn"
              onClick={goPrev}
              disabled={activeSlide === 0}
              aria-label="Previous projects"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="slider-btn next-btn"
              onClick={goNext}
              disabled={activeSlide >= totalPages - 1}
              aria-label="Next projects"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="slider-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(i)}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
