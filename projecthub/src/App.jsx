import React from "react";
import { useState } from "react";
import Navbar from "./components/layout/Navbar.jsx"
import ProjectCard from "./components/projects/ProjectCard.jsx"

// Our list of project data
const initialProjects = [
    {id : 1, title : "Project 1", owner : "owner 1"},
    {id : 2, title : "Project 2", owner : "owner 2"},
    {id : 3, title : "Project 3", owner : "owner 3"},
    {id : 4, title : "Project 4", owner : "owner 4"},
    {id : 5, title : "Project 5", owner : "owner 5"},
    {id : 6, title : "Project 6", owner : "owner 6"},
    {id : 7, title : "Project 7", owner : "owner 7"},
    {id : 8, title : "Project 8", owner : "owner 8"},
    {id : 9, title : "Project 9", owner : "owner 9"},
    {id : 10, title : "Project 10", owner : "owner 10"},
];

function App(){

    const [projects, setProjects] = useState(initialProjects);
    const [searchItem, setSearchItem] = useState("");
    
    return(
        <div>
            <Navbar title={"ProjectHub Dashboard"}/>

            <div>
                <main style={{padding : '20px'}}>
                    <h2>Welcome to the ProjectHub</h2>

                    <input 
                        type="text"
                        placeholder="Search projects"
                        value={searchItem}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    >
                    </input>
                    {/* We loop through the array and create a card for each item */}

                    <h2>Projects</h2>

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