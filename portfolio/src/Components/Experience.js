import ExpCard from "../Cards/ExpCard"; 

export default function Experience(){
    return(
        <div className="bg-cyan-950 max-h-full px-12 py-5 text-white">
            <div>
                <h2 className="text-center font-bold text-4xl m-12">Experience</h2>
            </div>
            <div className="flex justify-evenly items-center mb-20">
                <ExpCard desgn="Front-end Developer Intern" duration="August 2023 - Present" company="SOFTLES" href1="http://www.softles.com/" href2="" />
                <ExpCard desgn="Web Development and Designing Intern" duration="July 2023 - August 2023" company="Oasis Infobyte" href1="https://oasisinfobyte.com/" href2="" />
            </div> 
        </div>
    )
}