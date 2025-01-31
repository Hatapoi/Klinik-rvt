import dokter from "../assets/dokter.png"

const PenangananPoli = () => {
    return(
        <div className="p-12 h-[97%] w-full ms-2 rounded-md bg-slate-200 overflow-y-scroll">
            <div className="flex items-center justify-center">
                <div className="flex me-auto gap-5">
                    <button className="p-2 min-w-16 rounded-full text-semibold text-white bg-slate-300 hover:bg-white hover:text-black">All</button>
                    <button className="p-2 min-w-16 rounded-full text-semibold text-white bg-slate-300 hover:bg-white hover:text-black">Petugas</button>
                    <button className="p-2 min-w-16 rounded-full text-semibold text-white bg-slate-300 hover:bg-white hover:text-black">Penanganan</button>
                </div>
                <h3 className="p-2 min-w-16 rounded-full text-lg font-bold bg-white">Poli GIGI</h3>
            </div>
            <div className="p-8 mt-5 w-full flex flex-wrap items-center justify-center gap-5">
                <label className="w-72 rounded-full text-white bg-slate-300 cursor-pointer hover:bg-slate-400">
                    <p className="text-white p-2 ms-5">Pemeriksaan Gigi</p>
                </label>
                <label className="w-72 rounded-full text-white bg-slate-300 cursor-pointer hover:bg-slate-400">
                    <p className="text-white p-2 ms-5">Pemutihan Gigi</p>
                </label>
                <label className="w-72 rounded-full text-white bg-slate-300 cursor-pointer hover:bg-slate-400">
                    <p className="text-white p-2 ms-5">Tambal Gigi</p>
                </label>
                <label className="w-72 rounded-full text-white bg-slate-300 cursor-pointer hover:bg-slate-400">
                    <p className="text-white p-2 ms-5">Perawatan Gigi</p>
                </label>
                <label className="w-72 rounded-full text-white bg-slate-300 cursor-pointer hover:bg-slate-400">
                    <p className="text-white p-2 ms-5">Pencabutan Gigi</p>
                </label>
                <label className="w-72 rounded-full text-white bg-slate-300 cursor-pointer hover:bg-slate-400">
                    <p className="text-white p-2 ms-5">Pemasangan Kawat Gigi</p>
                </label>
            </div>
            <h3 className="font-bold text-xl">Petugas</h3>
            <div className='p-5 flex flex-wrap items-center justify-center gap-11'>
                <div className='relative col-span-4 md:w-52 md:h-44 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={dokter} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Dokter Ana</span>
                </div>
                <div className='relative col-span-4 md:w-52 md:h-44 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={dokter} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Dokter Ana</span>
                </div>
                <div className='relative col-span-4 md:w-52 md:h-44 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={dokter} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Dokter Ana</span>
                </div>
                <div className='relative col-span-4 md:w-52 md:h-44 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={dokter} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Dokter Ana</span>
                </div>
            </div>
        </div>
    )
}

export default PenangananPoli;