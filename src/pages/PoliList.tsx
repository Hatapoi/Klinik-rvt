import anak from '../component/assets/anak.webp';
import gigi from '../component/assets/gigi.webp';

const PoliList = () => {
    return(
        <div className='h-full w-full p-5 flex flex-wrap items-center justify-center gap-11'>
                <div className='relative col-span-4 md:w-72 md:h-60 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={anak} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Poli Anak</span>
                </div>
                <div className='relative col-span-4 md:w-72 md:h-60 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={gigi} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Poli Gigi</span>
                </div>
                <div className='relative col-span-4 md:w-72 md:h-60 rounded-lg hover:scale-105 cursor-pointer transition-all duration-200'>
                    <img className='w-full h-full rounded-lg' src={anak} alt="..." />
                    <span className='p-2 absolute bottom-0 w-full text-white text-center text-lg font-semibold rounded-b-md bg-slate-600 bg-opacity-50'>Poli Umum</span>
                </div>
            </div>
    )
}

export default PoliList;