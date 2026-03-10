import Navbar from "./components/layout/Navbar.jsx"

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
                    Welcome to the projectHub
                </main>
            </div>
        </div>
    )
}

export default App;