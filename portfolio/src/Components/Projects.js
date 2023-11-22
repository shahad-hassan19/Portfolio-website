import ProjectCard from '../Cards/ProjectCard'

export default function Projects(){
    return(
        <div className='bg-cyan-950 max-h-full px-12 py-5 text-white'>
            <div>
                <h2 className='text-center font-bold text-4xl m-12'>Projects</h2>
            </div>
            <div className='flex justify-evenly items-center mb-20'>
                <ProjectCard name="R£ƊFLƳ Designs" content="This project is aimed at enhancing my skills in HTML & CSS. The project involves the creation of a website for a website development company, showcasing my ability to develop a responsive website. Through this project, I am gaining hands-on experience in front-end design functionality." source="https://redfly-designs.shahadhassan3.repl.co/" />
                <ProjectCard name="Amazon Clone" content="This project is a meticulously designed clone of landing page of the popular e-commerce website, Amazon.com. This Project aims to demonstrate the implementation of HTML and CSS to replicate the layout and design of the Amazon website." source="https://redfly-designs.shahadhassan3.repl.co/" />
                <ProjectCard name="The Scaio'tael" content="This project is a captivating landing page for an e-books website, showcasing my skills in HTML & CSS. Featuring a modern layout, it highlights a curated selection of e-books with captivating cover images and concise information." source="https://redfly-designs.shahadhassan3.repl.co/" />
            </div>
        </div>
    )
}