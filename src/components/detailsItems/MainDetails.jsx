function MainDetails() {
    return (
        <>
            <table className="w-full table-auto border-collapse border border-slate-500 text-lg animate-appear delay-75 fill-mode-forwards opacity-0">
                <thead>
                    <tr>
                        <th className="p-3 bg-slate-700 bg-opacity-70 border border-slate-600 uppercase">About Me</th>
                    </tr>
                </thead>
                <tbody className="text-justify">
                    <tr>
                        <td className="p-4 bg-slate-800 bg-opacity-70 border border-slate-700">I am a backend engineer primarily building REST APIs in .NET and has worked in several small to medium-sized projects throughout the years. I consider myself an excellent detail-oriented programmer who is passionate at what I do, I never tire of learning exciting new things in the continuously changing IT industry.</td>
                    </tr>
                </tbody>
            </table>

            <table className="w-full able-auto border-collapse border border-slate-500 text-lg animate-appear delay-75 fill-mode-forwards opacity-0">
                <thead>
                    <tr>
                        <th className="p-3 bg-slate-700 bg-opacity-70 border border-slate-600 uppercase" colSpan={2}>Skills</th>
                    </tr>
                </thead>
                <tbody className="border border-slate-700">
                    <tr>
                        <td className="pt-4 pl-10 bg-slate-800 bg-opacity-70">• C# (.NET)</td>
                        <td className="pt-4 pl-10 bg-slate-800 bg-opacity-70">• PostgreSQL</td>
                    </tr>
                    <tr>
                        <td className="pl-10 bg-slate-800 bg-opacity-70">• ASP.NET Core</td>
                        <td className="pl-10 bg-slate-800 bg-opacity-70">• React</td>
                    </tr>
                    <tr>
                        <td className="pl-10 bg-slate-800 bg-opacity-70">• Javascript</td>
                        <td className="pl-10 bg-slate-800 bg-opacity-70">• MySQL</td>
                    </tr>
                    <tr>
                        <td className="pl-10 bg-slate-800 bg-opacity-70">• REST</td>
                        <td className="pl-10 bg-slate-800 bg-opacity-70">• Redis</td>
                    </tr>
                    <tr>
                        <td className="pl-10 bg-slate-800 bg-opacity-70">• EF Core</td>
                        <td className="pl-10 bg-slate-800 bg-opacity-70">• Docker</td>
                    </tr>
                    <tr>
                        <td className="pb-4 pl-10 bg-slate-800 bg-opacity-70">• AWS</td>
                        <td className="pb-4 pl-10 bg-slate-800 bg-opacity-70">• Git</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default MainDetails
