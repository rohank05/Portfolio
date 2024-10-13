import PropTypes from "prop-types";

const Project = ({ name, description, language, stars, url }) => (
    <button
        className="bg-darker rounded-lg p-4 shadow hover:shadow-md transition-shadow text-left w-full"
        onClick={() => window.open(url, "_blank")}
        onKeyDown={(e) => e.key === "Enter" && window.open(url, "_blank")}
        aria-label={`View project: ${name}`}
    >
        <h3 className="text-lg font-semibold text-primary mb-2">{name}</h3>
        <p className="text-sm text-gray-300 mb-2 h-12 overflow-hidden">
            {description || "No description available."}
        </p>
        <p className="text-sm text-gray-400">
            {language && <span className="mr-4">🔧 {language}</span>}
            <span>⭐ {stars}</span>
        </p>
    </button>
);

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    stars: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
};

const Projects = ({ projects }) => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
                <Project key={project.id} {...project} />
            ))}
            <button
                className="bg-secondary hover:bg-opacity-90 rounded-lg p-4 shadow hover:shadow-md transition-shadow text-center w-full"
                onClick={() =>
                    window.open(
                        "https://github.com/rohank05?tab=repositories",
                        "_blank"
                    )
                }
                onKeyDown={(e) =>
                    e.key === "Enter" &&
                    window.open(
                        "https://github.com/rohank05?tab=repositories",
                        "_blank"
                    )
                }
                aria-label="See more projects on GitHub"
            >
                <h3 className="text-lg font-semibold text-white">
                    See More on GitHub
                </h3>
            </button>
        </div>
    </section>
);

Projects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            language: PropTypes.string,
            stars: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Projects;
