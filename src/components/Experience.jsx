import data from "../data.json";
const Experience = () => (
    <section>
        <h2 className="text-2xl font-bold text-accent1 mb-4">
            Work Experience
        </h2>
        <div className="space-y-6">
            {data.experiences.map((exp) => (
                <div
                    key={exp.title}
                    className="bg-darker rounded-lg p-4 shadow"
                >
                    <h3 className="text-xl font-semibold text-accent2">
                        {exp.title}
                    </h3>
                    <p className="text-gray-300">{exp.period}</p>
                    <p className="mt-2 text-gray-400">{exp.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Experience;
