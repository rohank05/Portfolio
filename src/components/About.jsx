import data from "../data.json";
const About = () => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-gray-300">{data.about}</p>
    </section>
);

export default About;
