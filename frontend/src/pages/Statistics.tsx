import stats1Img from '../assets/stats_1.png';

interface StatSection {
    title: string;
    src: string;
    desc: string;
}

interface Citation {
    id: number;
    text: string;
}

export default function Statistics() {
    const statSections: StatSection[] = [
        {
            title: "Traffic Congestion",
            src: stats1Img,
            desc: "Average American waste 43 to 63 hours stuck in traffic. Aprox 13 Billion dollars are generated from speeding tickets a year [1] [2] [3]."
        },
        // {
        //     title: "asd",
        //     src: stats2Img,
        //     desc: "asd"
        // }
    ];

    const citations: Citation[] = [
        {
            id: 1,
            text: "2015 Urban Mobility Scorecard, Texas A&M Transporation Institute"
        },
        {
            id: 2,
            text: "https://taxpolicycenter.org/briefing-book/how-do-state-and-local-revenues-fines-fees-and-forfeitures-work"
        },
        {
            id: 3,
            text: "https://www.energy.gov/energysaver/driving-more-efficientlys"
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto py-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-4 mb-2 uppercase">
                Read the Facts
            </h2>
            <p className="text-zinc-400 mb-12 max-w-xl font-medium">
                True road freedom relies on sound, technical data. Explore the empirical reality behind unrestricted highways and lane engineering.
            </p>

            {/* REPORT GRID */}
            <div className="flex flex-col gap-12 mb-16">
                {statSections.map((section, index) => (
                    <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8 grid md:grid-cols-2 gap-8 items-center">

                        {/* IMAGE CANVAS */}
                        <div className="bg-white rounded-xl p-6 flex items-center justify-center h-72 overflow-hidden shadow-inner order-last md:order-none">
                            <img
                                src={section.src}
                                className="max-h-full max-w-full object-contain mix-blend-multiply"
                            />
                        </div>

                        {/* ANALYSIS */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-black uppercase text-zinc-100 tracking-tight mb-4">
                                {section.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                {section.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CITATIONS */}
            <div className="border-t border-zinc-900 pt-8 mt-12">
                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">References & Studies</h4>
                <ol className="text-xs text-zinc-500 space-y-3 list-none ">
                    {citations.map((cite) => (
                        <li key={cite.id} className="flex gap-2 leading-relaxed">
                            <span className="text-red-600 font-bold">[{cite.id}]</span>
                            <span>{cite.text}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
