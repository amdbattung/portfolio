import LinkedIn from "../assets/linkedin_logo.svg?react";
import Github from "../assets/github_logo.svg?react";
import Email from "../assets/email_logo.svg?react";

function Profile() {
    return (
        <section class="m-5 p-5 pl-20 flex flex-col justify-end overflow-hidden">
            <h1 class="uppercase font-semibold text-5xl mb-10 animate-appear delay-100 fill-mode-forwards opacity-0">Anthony Mark Duane Battung</h1>

            <div class="flex mb-32 text-2xl animate-appear delay-500 fill-mode-forwards opacity-0">
                <div class="w-[2px] h-auto items-stretch m-1 bg-white" />
                <div class="pl-4">
                    <h2 class="uppercase">Web Developer</h2>
                    <h2 class="uppercase">Backend Engineer</h2>
                </div>
            </div>

            <div class="flex mb-2 animate-appear delay-1000 fill-mode-forwards opacity-0">
                <a href="https://www.linkedin.com/in/anthony-mark-duane-battung-1a7059318" target="_blank" rel="noopener noreferrer"><LinkedIn class="fill-white w-11 h-min" /></a>
                <a href="https://github.com/amdbattung" target="_blank" rel="noopener noreferrer"><Github class="fill-white w-11 h-min ml-4" /></a>
                <a href="mailto:anthonymarkbattung@gmail.com"><Email class="fill-white w-11 h-min ml-4" /></a>
            </div>
        </section>
    )
}

export default Profile