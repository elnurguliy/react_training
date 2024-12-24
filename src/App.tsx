import { useState, useEffect } from "react";
import "./App.css";
import code from "/images/code.jpg";

function PortfolioHeader({ name }: { name: string; year: number }) {
    return (
        <header>
            <h1 className="font-bold text-2xl font-mono mb-4">Welcome to my {name}!!</h1>
            <h2 className="text-lg text-teal-700 font-semibold">My Projects:</h2>
        </header>
    );
}

const projectArray: string[] = [
    "JavaScript Game",
    "TypeScript Game",
    "React Game",
    "Angular Game",
];

const porjectObjects = projectArray.map((project, i) => ({
    id: i,
    title: project
}));

/**
 * Displays a list of projects.
 */
function Main({ projects }: { projects: { id: number; title: string }[] }) {
    return (
        // jsx/tsx fragment starting tag
        <>
            <div>
                <h2>About Me</h2>
            </div>
            <main>
                <img src={code}
                    className="h-48 mx-auto rounded-lg"
                    alt="A picture of code " />
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>{project.title}</li>
                    ))}
                </ul>
            </main>
        </> // jsx/tsx fragment ending tag
    );
}

function App() {
    const [educationStatus, setStatus] = useState(true);

    useEffect(() => {
        console.log(
            `The education is ${educationStatus ? "in progress" : "completed"}`
        );
    }, [educationStatus]);

    return (
        <div className="bg-orange-400 rounded-2xl">

            <h1>
                Education Status: {" "}
                {educationStatus ? "In Progress" : "Completed"}
            </h1>
            <button onClick={() => setStatus(!educationStatus)}
                className="cursor-pointer border border-black bg-gray-400 rounded-lg px-2 py-2">
                {educationStatus ? "Complete" : "In Progress"} Education
            </button>

            <PortfolioHeader name="Portfolio" year={new Date().getFullYear()} />

            <Main projects={porjectObjects} />
            <main>
                <h2 className="mt-4">Time to impress the employers.</h2>
            </main>

            <footer>
                <p>Copyright {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default App;
