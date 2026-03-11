const ProjectCard = ({title, owner}) =>{

    // const handleclick = () => {
    //     alert('You clicked on ${title}');
    //     console.log('You clicked on ${title}');
    // };

    const handleSelect = () => {
        alert('You selected ${title}');
        console.log('Selected Project :  ${title}');
    }

    return(
        <div onClick={handleclick}>
            onClick = {handleSelect}
            style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', cursor: 'pointer' }}
            <h3>{title}</h3>
            <p>Owner : {owner}</p>
        </div>
    )
}

export default ProjectCard;