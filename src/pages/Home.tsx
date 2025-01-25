import doctor from '../assets/dokter.png';
import anak from '../assets/anak.webp';
import gigi from '../assets/gigi.webp';


const Home = () => {
    return (
        <div className="h-full w-full">
            <div className="p-6 flex items-center justify-center">
                <div className="p-8 flex flex-col gap-8">
                    <h1 className="text-3xl md:text-5xl italic whitespace-nowrap">
                        Di Dalam Tubuh
                        <p className="ms-10 p-3">Yang <span className="font-serif font-semibold text-green-600">Sehat</span> Terdapat</p>
                        Jiwa Yang <span className="font-serif font-semibold text-blue-600">Kuat</span>
                    </h1>
                    <div className='flex items-center justify-start'>
                        <button className="p-2 w-15 bg-blue-600 rounded-l-lg hover:bg-blue-500">Login</button>
                        <button className="p-2 w-15 bg-slate-200 rounded-r-lg hover:bg-slate-100">Register</button>
                    </div>
                </div>
                <div>
                    <img className='hidden w-96 min-w-64 h-auto md:block' src={doctor} alt="..." />
                </div>
            </div>

            <div className='p-5 flex flex-wrap items-center justify-center gap-11'>
                <div className='relative col-span-4 md:w-60 md:h-52 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={anak} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Poli Anak</span>
                </div>
                <div className='relative col-span-4 md:w-60 md:h-52 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={gigi} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Poli Gigi</span>
                </div>
                <div className='relative col-span-4 md:w-60 md:h-52 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={anak} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Poli Umum</span>
                </div>
            </div>
        </div>
    )
}

export default Home;