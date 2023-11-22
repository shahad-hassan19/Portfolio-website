export default function Hero(){
    return(
        <div className=" bg-cyan-950 max-h-full text-white px-12 py-5 flex justify-between items-center">
            <div className="float-left rounded-full overflow-hidden m-12">
                <img src = {require("./Assets/My-Pic.png")} alt='My-Pic' className="object-cover h-80 w-80" />
            </div>
            <div className=" flex-1 mt-10">
                <h1 className="font-bold text-4xl py-2">
                    Shahad Hassan
                </h1>
                <h2 className="font-bold text-2xl pl-2 py-2">
                    Front-end Developer
                </h2> 
                <p className="text-justify mr-20 py-2">
                    I am a Frontend Developer, and I'm very passionate and dedicated to my work.  I own a patient and hard-working personality. I am currently pursuing Bachelor of Technology in specialization of Computer Science and Engineering. I’m very optimistic person and I have good Team Management Skill.
                </p>
            </div>
            <div className="flex flex-col mr-4">
                <a href="/home" rel="noreferrer" target="_blank" className="my-4 hover:text-amber-600">fa-facebook</a>
                <a href="/home" rel="noreferrer" target="_blank" className="my-4 hover:text-amber-600">fa-linkedin</a>
                <a href="/home" rel="noreferrer" target="_blank" className="my-4 hover:text-amber-600">fa-github</a>
                <a href="/home" rel="noreferrer" target="_blank" className="my-4 hover:text-amber-600">faTwitter</a>
            </div>
            
            
        </div>
    )
}