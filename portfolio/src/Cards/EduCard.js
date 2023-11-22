export default function EduCard(props){
    return(
        <div className="border border-white rounded-md p-8">
            <h3 className="font-semibold text-2xl mb-3">
                {props.name}
            </h3>
            <p>
                {props.year}
            </p>
            <p>
                {props.board}
            </p>
            <p>
                {props.institute}
            </p>
        </div>
    )
}

