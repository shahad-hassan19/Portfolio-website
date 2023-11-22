export default function ExpCard(props){
    return(
        <div>
            <div className="border border-white rounded-md p-8">
            <h3 className="font-semibold text-2xl mb-3">{props.desgn}</h3>
            <p>{props.duration}</p>
            <a href={props.href1} rel="noreferrer" target="_blank" >{props.company}</a>
            {/* <button><a href={props.href2} rel="noreferrer" target="_blank" >Certificate</a></button> */}
            </div>
        </div>
    )
}
