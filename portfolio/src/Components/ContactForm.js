export default function ContactForm(){
    return(
        <div className="bg-cyan-950 max-h-full px-12 py-5 ">
            <h2 className=" text-center text-white font-bold text-4xl m-20">Contact Me</h2>
            <form className="flex justify-center items-center flex-col m-12">
                <div className="m-4">
                    <label htmlFor="name" className="text-white">Name: </label>
                    <input type="text" id="name" />
                </div>
                <div className="m-4">
                    <label htmlFor="email" className="text-white">E-mail: </label>
                    <input type="email" id="email" />
                </div>
                <div className="m-4">
                    <label htmlFor="message" className="text-white">Message: </label>
                    <textarea id="message" ></textarea>
                </div>
                <button type="submit" className="m-4 bg-amber-600 py-1 px-2 rounded-md font-semibold">Submit</button>
            </form>
        </div>
    )
}