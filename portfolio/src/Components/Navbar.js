export default function Navbar(){
    return(
        <div className='bg-cyan-950 text-white'>
            <nav className=" flex justify-between items-center ">
                <a href="/home" className="m-5">
                    <span className= "m-4 font-bold text-2xl" >Shahad Hassan</span>
                </a>
                <ul className=" inline-flex mr-10 font-semibold text-1xl">
                    <li className="m-6 hover:text-amber-600">
                        <a href='http://www.softles.com/' rel="noreferrer" target="_blank">Home</a>
                    </li>
                    <li className="m-6 hover:text-amber-600">
                        <a href='http://www.softles.com/' rel="noreferrer" target="_blank">Education</a>
                    </li>
                    <li className="m-6 hover:text-amber-600">
                        <a href='http://www.softles.com/' rel="noreferrer" target="_blank">Projects</a>
                    </li>
                    <li className="m-6 hover:text-amber-600">
                        <a href='http://www.softles.com/' rel="noreferrer" target="_blank">Experience</a>
                    </li>
                    <li className="m-6 hover:text-amber-600">
                        <a href='http://www.softles.com/' rel="noreferrer" target="_blank">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
            
    )
}