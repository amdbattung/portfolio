function MainDetails() {
    return (
        <>
            <table class="w-full table-auto border-collapse border border-slate-500 text-lg animate-appear delay-75 fill-mode-forwards opacity-0">
                <thead>
                    <tr>
                        <th class="p-3 bg-slate-700 bg-opacity-70 border border-slate-600 uppercase">About Me</th>
                    </tr>
                </thead>
                <tbody class="text-justify">
                    <tr>
                        <td class="p-4 bg-slate-800 bg-opacity-70 border border-slate-700">A backend engineer primarily building REST APIs in .NET and has worked in several small to medium-sized projects throughout the years. An excellent detail-oriented programmer who is passionate at what I do. I am a fresh graduate with a Bachelor of Science degree in Information Technology. Determined to work hard and gain experience, I never tire of learning exciting new things in the continuously changing IT industry.</td>
                    </tr>
                </tbody>
            </table>

            <table class="w-full able-auto border-collapse border border-slate-500 text-lg animate-appear delay-75 fill-mode-forwards opacity-0">
                <thead>
                    <tr>
                        <th class="p-3 bg-slate-700 bg-opacity-70 border border-slate-600 uppercase" colSpan={2}>Skills</th>
                    </tr>
                </thead>
                <tbody class="border border-slate-700">
                    <tr>
                        <td class="pt-4 pl-10 bg-slate-800 bg-opacity-70">• C# (.NET)</td>
                        <td class="pt-4 pl-10 bg-slate-800 bg-opacity-70">• PostgreSQL</td>
                    </tr>
                    <tr>
                        <td class="pl-10 bg-slate-800 bg-opacity-70">• ASP.NET Core</td>
                        <td class="pl-10 bg-slate-800 bg-opacity-70">• MySQL</td>
                    </tr>
                    <tr>
                        <td class="pl-10 bg-slate-800 bg-opacity-70">• Javascript</td>
                        <td class="pl-10 bg-slate-800 bg-opacity-70">• Redis</td>
                    </tr>
                    <tr>
                        <td class="pl-10 bg-slate-800 bg-opacity-70">• REST</td>
                        <td class="pl-10 bg-slate-800 bg-opacity-70">• Docker</td>
                    </tr>
                    <tr>
                        <td class="pl-10 bg-slate-800 bg-opacity-70">• EF Core</td>
                        <td class="pl-10 bg-slate-800 bg-opacity-70">• Git</td>
                    </tr>
                    <tr>
                        <td class="pb-4 pl-10 bg-slate-800 bg-opacity-70">• AWS</td>
                        <td class="pb-4 pl-10 bg-slate-800 bg-opacity-70"></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default MainDetails