import LinkedIn from "../assets/linkedin_logo.svg?react";
import Github from "../assets/github_logo.svg?react";
import Email from "../assets/email_logo.svg?react";

function Profile() {
    return (
        <section className="m-5 p-5 pl-20 flex flex-col justify-end overflow-hidden">
            <h1 className="uppercase font-semibold text-6xl mb-10 animate-appear delay-100 fill-mode-forwards opacity-0">Anthony Battung</h1>

            <div className="flex mb-32 text-2xl animate-appear delay-500 fill-mode-forwards opacity-0">
                <div className="w-[2px] h-auto items-stretch m-1 bg-white" />
                <div className="pl-4">
                    <h2 className="uppercase">Web Developer</h2>
                    <h2 className="uppercase">Backend Engineer</h2>
                </div>
            </div>

            <div className="flex mb-2 animate-appear delay-1000 fill-mode-forwards opacity-0">
                <a href="https://www.linkedin.com/in/anthony-battung-1a7059318" target="_blank" rel="noopener noreferrer"><LinkedIn className="fill-white w-11 h-min" /></a>
                <a href="https://github.com/amdbattung" target="_blank" rel="noopener noreferrer"><Github className="fill-white w-11 h-min ml-4" /></a>
                <a href="mailto:anthony@amdbattung.com"><Email className="fill-white w-11 h-min ml-4" /></a>
            </div>
        </section>
    )
}

export default Profile