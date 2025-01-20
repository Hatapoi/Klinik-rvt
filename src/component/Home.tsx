import doctor from '../assets/dokter.png';

const Home = () => {
    return (
        <div className="h-full w-full">
            <div className="flex h-[55%] items-center justify-center bg-slate-500">
                <div className="p-12 space-y-10 ">
                    <h1 className="text-xl md:text-5xl italic whitespace-nowrap">
                        Di Dalam Tubuh
                        <p className="ms-10 p-3">Yang <span className="font-serif font-semibold text-green-600">Sehat</span> Terdapat</p>
                        Jiwa Yang <span className="font-serif font-semibold text-blue-600">Kuat</span>
                    </h1>
                    <button className="p-2 bg-blue-600 rounded-l-lg hover:bg-blue-500">Login</button>
                    <button className="p-2 bg-slate-200 rounded-r-lg hover:bg-slate-100">Register</button>
                </div>
                <div>
                    <img className='w-[80%] h-auto' src={doctor} alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Home;