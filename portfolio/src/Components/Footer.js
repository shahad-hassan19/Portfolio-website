export default function Footer(){
    return(
        <div className="bg-black px-12 py-5 text-white flex items-center justify-between">
            <div>
                <span className=" font-semibold text-2xl">
                    Shahad Hassan
                </span>
            </div>
            <div>
                <p className=" text-center ">Copyright&copy; 2023 </p>
                <p>Designed by Shahad Hassan</p>
            </div>
            <button className="mr-4 bg-amber-600 py-0.5 px-2 text-black font-semibold rounded-md">Back to Top</button>
        </div>
    )
}