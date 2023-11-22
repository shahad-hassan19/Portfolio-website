export default function ProjectCard(props){
    
    return(
        <div className="border border-white rounded-md p-8 m-2">
            <h3 className="font-semibold text-2xl mb-3">
                {props.name}
            </h3>
            <p>
                {props.content}
            </p>
            <button className="bg-amber-600 py-0.5 px-2 text-black font-semibold rounded-md mt-3">
                <a href={props.source} rel="noreferrer" target="_blank">Get a Glance</a>
            </button>
        </div>
    )
}