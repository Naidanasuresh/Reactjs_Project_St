

// function Primary_Button(props){
//     // console.log(props)
//     return (
//         <>
//         <button type={props?.type==="submit"?"submit":"button"} className="bg-linear-to-br from[#ce212f] to-red-400" onClick={props.onClick}>{props.children}</button>
        
//         </>
//     )

// }

// export default Primary_Button;



function PrimaryButton(props){

    return (
        <>

        <button className="bg-linear-to-br from [#ce212f] to-red-400  hover:bg-orange-300" type={props?.type==="submit"?"submit":"button"} onClick={props.onClick}>{props.children}</button>
        </>
    )
}

export default PrimaryButton;