const ProjectCard = ({title, owner}) =>{

    const handleclick = () => {
        alert('You clicked on ${title}');
        console.log('You clicked on ${title}');
    };

    return(
        <div onClick={handleclick}>
            <h3>{title}</h3>
            <p>{owner}</p>
        </div>
    )
}

export default ProjectCard;