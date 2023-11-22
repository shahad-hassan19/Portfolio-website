import EduCard from '../Cards/EduCard'
export default function Education(){
    return(
        <div className="bg-cyan-950 max-h-full px-12 py-5 text-white">
            <div>
                <h2 className='text-center font-bold text-4xl mt-12 mb-20'>Education</h2>
            </div>
            <div className='flex justify-evenly items-center mt-10 mb-20'>
                <EduCard name="Bachelor of Technology - CSE" year="2020-present" board="AKTU" institute="Vidya College of Engineering, Meerut" />
                <EduCard name="Intermediate" year="2020" board="CBSE Board" institute="D.S. Public School, Meerut" />
                <EduCard name="High-School" year="2018" board="CBSE Board" institute="D.S. Public School, Meerut" />
            </div>
        </div>
    )
}