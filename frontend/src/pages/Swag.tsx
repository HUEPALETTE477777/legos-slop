import logoImg from '../assets/logo.png';
import bumperStickerImg from '../assets/bumper_sticker.png';


export default function Swag() {
    const merchandise = [
        {
            title: "Official U.S.A. Logo",
            src: logoImg,
            desc: "High-contrast emblem for true performance enthusiasts."
        },
        {
            title: "Alliance Bumper Sticker",
            src: bumperStickerImg,
            desc: "Perfect alignment for rear diffusers and trunk lids."
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto py-4 animate-fade-in">
            <span className="text-red-500 font-extrabold uppercase tracking-widest text-xs bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                Alliance Gear
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-4 mb-2 uppercase">
                Official Swag
            </h2>
            <p className="text-zinc-400 mb-12 max-w-xl font-medium">
                Swag. Show your commitment to clearing lanes and reclaiming everyone's collective driving time.
            </p>

            {/* MERCH GRID*/}
            <div className="grid md:grid-cols-2 gap-8">
                {merchandise.map((item, index) => (
                    <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors cursor-pointer">
                        {/* IMAGE */}
                        <div className="bg-white rounded-xl p-8 flex items-center justify-center h-64 overflow-hidden mb-6 shadow-inner">
                            <img
                                src={item.src}
                                className="max-h-full max-w-full object-contain mix-blend-multiply"
                            />
                        </div>

                        {/* CONTENT */}
                        <div>
                            <h3 className="text-xl font-black uppercase text-zinc-100 tracking-tight">{item.title}</h3>
                            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
