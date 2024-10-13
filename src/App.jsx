import { useState, useEffect } from "react";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Project";
import Experience from "./components/Experience";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/rohank05/repos")
            .then((response) => response.json())
            .then((data) => {
                const sortedProjects = data
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 5)
                    .map((repo) => ({
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        language: repo.language,
                        stars: repo.stargazers_count,
                        url: repo.html_url,
                    }));
                setProjects(sortedProjects);
            })
            .catch((error) =>
                console.error("Error fetching GitHub projects:", error)
            );
    }, []);

    return (
        <div className="bg-darker text-gray-100 font-sans min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/4">
                        <Profile />
                    </div>
                    <div className="lg:w-3/4">
                        <main className="bg-dark rounded-lg p-6 shadow-lg">
                            <About />
                            <Projects projects={projects} />
                            <Experience />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
