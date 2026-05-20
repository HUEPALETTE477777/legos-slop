import { Link } from 'react-router-dom';
import DriverArchetypes from '../components/DriverArchetypes';

export default function Home() {
    return (
        <div className="w-full max-w-5xl mx-auto py-12 md:py-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/30 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-red-500 uppercase mb-8">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
                Official Chapter Launch
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6">
                Unlimited Speed <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-400">
                    Alliance (U.S.A.)
                </span>
            </h1>

            {/* OUR PASSION/PITCH/MISSION STATEMENT */}
            <div className="border-l-4 border-red-600 pl-6 my-8 max-w-3xl">
                <p className="text-xl md:text-3xl font-extrabold tracking-tight text-zinc-100 uppercase leading-snug">
                    "We drive cars and lose a lot of time and gas in traffic."
                </p>
            </div>

            {/* BODY CONTENT */}
            <p className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-12 font-medium">
                Our mission is to ban speed limits on highways. For many years, Americans have wasted hundred of hours, been thrown in jail, given speeding tickets that are very expensive. Our interest group will get rid of all that hassle and make roads more enjoyable and efficient. 
            </p>

            {/* CALL TO ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/join"
                    className="bg-red-600 hover:bg-red-500 text-white font-black uppercase text-sm tracking-wider px-8 py-4 rounded-lg shadow-xl shadow-red-600/20 text-center transition-all transform hover:-translate-y-0.5"
                >
                    Join Our Movement
                </Link>
                <Link
                    to="/statistics"
                    className="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-black uppercase text-sm tracking-wider px-8 py-4 rounded-lg text-center transition-all"
                >
                    Read the Facts
                </Link>
                <Link
                    to="/about"
                    className="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-black uppercase text-sm tracking-wider px-8 py-4 rounded-lg text-center transition-all"
                >
                    About us
                </Link>
            </div>

            {/* STATS PANEL */}
            <div className="grid grid-cols-2 gap-6 mt-16 pt-12 border-t border-zinc-900">
                <div>
                    <p className="text-3xl md:text-4xl font-black text-zinc-100">∞ MPH</p>
                    <p className="text-xs uppercase tracking-wider font-bold text-zinc-500 mt-1">Our Target Restriction</p>
                </div>
                <div>
                    <p className="text-3xl md:text-4xl font-black text-zinc-100">100%</p>
                    <p className="text-xs uppercase tracking-wider font-bold text-zinc-500 mt-1">Driver Lane Discipline</p>
                </div>
            </div>

            <DriverArchetypes />
        </div>
    );
}
