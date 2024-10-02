function Accomplishments() {
    return (
        <>
            <table className="w-full table-auto border-collapse border border-slate-500 text-lg animate-appear delay-75 fill-mode-forwards opacity-0">
                <thead>
                    <tr>
                        <th className="p-3 bg-slate-700 bg-opacity-70 border border-slate-600 uppercase">Education</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 bg-slate-800 bg-opacity-70 border border-slate-700 flex">
                            <div className="flex-grow text-left mr-3">
                                <b className="text-xl">Central Mindanao University</b> <br />
                                <i>BS Information Technology</i>
                            </div>
                            <div className="flex-1 text-right text-base">
                                2019 – 2024
                            </div>
                        </td>
                        <td className="p-4 bg-slate-800 bg-opacity-70 border border-slate-700 flex">
                            <div className="flex-1 text-left mr-3">
                                <b className="text-xl">AMA Computer Learning Center College of Bukidnon</b>
                            </div>
                            <div className="flex-1 text-right text-base">
                                2017 – 2019
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="w-full table-auto border-collapse border border-slate-500 text-lg animate-appear delay-75 fill-mode-forwards opacity-0">
                <thead>
                    <tr>
                        <th className="p-3 bg-slate-700 bg-opacity-70 border border-slate-600 uppercase">Work Experience</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 bg-slate-800 bg-opacity-70 border border-slate-700 flex">
                            <div className="flex-grow text-left mr-3">
                                <b className="text-xl">M. Montesclaros Holdings, Inc.</b> <br />
                                <i>IT Intern</i>
                            </div>
                            <div className="flex-1 text-right text-base">
                                February 2024 to May 2024
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="w-full table-auto border-collapse border border-slate-500 text-lg animate-appear delay-75 fill-mode-forwards opacity-0">
                <thead>
                    <tr>
                        <th className="p-3 bg-slate-700 bg-opacity-70 border border-slate-600 uppercase">Certifications</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 bg-slate-800 bg-opacity-70 border border-slate-700 flex">
                            <div className="flex-grow text-left mr-3">
                                <b className="text-xl">2nd Runner Up XCC Java Programming Competition</b> <br />
                                <i>Xavier Computing Challenges</i>
                            </div>
                            <div className="flex-1 text-right text-base">
                                2020
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Accomplishments