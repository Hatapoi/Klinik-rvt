import doctor from '../assets/dokter.png';
import anak from '../assets/anak.webp';
import gigi from '../assets/gigi.webp';
import SidebarDisplay from '../component/sidebarDisplay';
import Sidebar from '../component/Sidebar';
import { useState } from 'react';

const Home = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    const ToogleSidebar = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div className='h-full flex'>
            <Sidebar 
                toggle={isHidden}
                toggleSide={ToogleSidebar}
            />
            <div className="h-full w-full">
                <SidebarDisplay 
                    toggle={isHidden}
                    toggleSide={ToogleSidebar}
                />
                <div className="flex items-center justify-center">
                    <div className="p-12 space-y-10 ">
                        <h1 className="text-3xl md:text-5xl italic whitespace-nowrap">
                            Di Dalam Tubuh
                            <p className="ms-10 p-3">Yang <span className="font-serif font-semibold text-green-600">Sehat</span> Terdapat</p>
                            Jiwa Yang <span className="font-serif font-semibold text-blue-600">Kuat</span>
                        </h1>
                        <button className="p-2 bg-blue-600 rounded-l-lg hover:bg-blue-500">Login</button>
                        <button className="p-2 bg-slate-200 rounded-r-lg hover:bg-slate-100">Register</button>
                    </div>
                    <div>
                        <img className='w-96 h-auto' src={doctor} alt="..." />
                    </div>
                </div>

                <div className='p-5 flex items-center justify-center gap-11'>
                    <div className='relative w-60 h-52 rounded-lg hover:w-64 hover:h-56 cursor-pointer transition-all duration-300'>
                        <img className='w-full h-full rounded-lg' src={anak} alt="..." />
                        <span className='p-3 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Poli Anak</span>
                    </div>
                    <div className='relative w-60 h-52 rounded-lg hover:w-64 hover:h-56 cursor-pointer transition-all duration-300'>
                        <img className='w-full h-full rounded-lg' src={gigi} alt="..." />
                        <span className='p-3 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Poli Gigi</span>
                    </div>
                    <div className='relative w-60 h-52 rounded-lg hover:w-64 hover:h-56 cursor-pointer transition-all duration-300'>
                        <img className='w-full h-full rounded-lg' src={anak} alt="..." />
                        <span className='p-3 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Poli Umum</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;