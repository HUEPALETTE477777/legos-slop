export default function DriverArchetypes() {
    const targets = [
        {
            badge: "PerformanceMaxxing",
            title: "The Car Enthusiasts",
            desc: "Drivers who invest heavily in modern automotive engineering, precise handling, and structural tuning. They deserve the public spaces to showcase what their vehicles are capable of without the law handing penalties.",
            icon: "⚡"
        },
        {
            badge: "TimeMaxxing",
            title: "The Pragmatic Commuters",
            desc: "Individuals who are consistently losing precious hours stuck in traffic bottlenecks. They need to arrive at their destinations efficiently because their time, careers, and family life depend on it.",
            icon: "⏰"
        }
    ];

    return (
        <div className="w-full mt-16 pt-16 border-t border-zinc-900">
            <span className="text-red-500 font-extrabold uppercase tracking-widest text-xs bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                Who We Want
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mt-4 mb-8 uppercase">
                Different audience. One Unified Mission.
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {targets.map((item, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group"
                    >
                        <div>
                            {/* PROFILE HEADER */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-black tracking-wider uppercase text-zinc-500 bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800">
                                    {item.badge}
                                </span>
                                <span className="text-3xl filter saturate-50 group-hover:saturate-100 transition-all">
                                    {item.icon}
                                </span>
                            </div>

                            {/* TITLE + DESC */}
                            <h3 className="text-xl md:text-2xl font-black uppercase text-zinc-100 tracking-tight mb-3">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
