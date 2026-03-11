import Navbar from "./components/layout/Navbar.jsx"
import ProjectCard from "./components/projects/ProjectCard.jsx"

const initialProjects = [
    {id : 1, title : "Project 1", owner : "owner 1"},
    {id : 2, title : "Project 2", owner : "owner 2"},
    {id : 3, title : "Project 3", owner : "owner 3"},
];

function App(){
    return(
        <div>
            <Navbar title={"ProjectHub Dashboard"}/>
            <div>
                <main>
                    {initialProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            owner={project.owner}
                        />
                    ))}
                </main>
            </div>
        </div>
    )
}

export default App;