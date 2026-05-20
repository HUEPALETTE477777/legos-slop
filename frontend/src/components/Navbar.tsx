import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800 px-6 py-4 flex items-center justify-evenly">
            <Link to="/" className="text-xl font-black tracking-tighter text-zinc-100 uppercase hover:text-red-500 transition-colors">
                U.S.A.<span className="text-red-600 font-medium text-xs tracking-widest ml-2 block sm:inline">Unlimited Speed Alliance</span>
            </Link>
            <Link to="/join" className="text-xl font-black uppercase hover:text-red-500 transition-colors">
                Join Us
            </Link>
            <Link to="/statistics" className="text-xl font-black uppercase hover:text-red-500 transition-colors">
                Statistics
            </Link>
            <Link to="/swag" className="text-xl font-black uppercase hover:text-red-500 transition-colors">
                Swag
            </Link>
        </nav>
    )
}

export default Navbar