

function Primary_Button(props){
    // console.log(props)
    return (
        <>
        <button onClick={props.onClick}>{props.children}</button>
        
        </>
    )

}

export default Primary_Button;