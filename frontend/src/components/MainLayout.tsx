import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
    return (
        <div className="h-screen overflow-x-hidden w-full bg-black text-zinc-100 font-sans flex flex-col selection:bg-red-600 selection:text-white">

            <Navbar />
            <Outlet />

        </div>
    );
}
