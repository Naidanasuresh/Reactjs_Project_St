export function ProfileCard(props){


    return(
        <>
        <article className="Profilecards">
            <p>{props.id}</p>
            <h1>{props.name}</h1>
            <p>{props.Designation}</p>


        </article>
        


        </>
    )
}

