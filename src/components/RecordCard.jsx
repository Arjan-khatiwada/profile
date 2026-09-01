export default function RecordCard({ record, showTags = false }) {
  const isActive = record.status === 'active';

  return (
    <article className="record-card">
      <div className="record-icon" aria-hidden="true">
        <i className={record.icon}></i>
      </div>
      <div className="record-content">
        <div className="record-top">
          <h3 className="record-title">{record.title}</h3>
          {record.link ? (
            <a
              href={record.link}
              className="record-link-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${record.org}`}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          ) : null}
        </div>

        {record.link ? (
          <a
            href={record.link}
            className="record-org record-org-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {record.org}
          </a>
        ) : (
          <p className="record-org">{record.org}</p>
        )}

        {record.body ? <p className="record-body">{record.body}</p> : null}

        <div className="record-badges">
          <span className="badge-date">
            <i className="fas fa-calendar-alt" aria-hidden="true"></i>
            {record.date}
          </span>
          <span className={`badge-status ${isActive ? 'badge-status-active' : 'badge-status-completed'}`}>
            <i className={`fas ${isActive ? 'fa-circle' : 'fa-check-circle'}`} aria-hidden="true"></i>
            {isActive ? 'System Active' : 'Execution Completed'}
          </span>
        </div>

        {showTags && record.tags?.length > 0 ? (
          <div className="record-tags">
            {record.tags.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
