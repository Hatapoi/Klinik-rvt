import { FiRotateCcw } from "react-icons/fi";


const UserProfil = () => {
    return (
        <div className="h-full w-64 ml-4 bg-slate-200 ">
            <h3 className="p-3 mt-5 mx-3 rounded-full font-semibold text-center bg-slate-300">M Hatta Ramadhan</h3>
            <div className="p-4 ms-5 flex flex-col">
                <label className="p-2 flex items-center gap-2 rounded-md hover:cursor-pointer hover:bg-slate-100">
                    <i><FiRotateCcw className="size-6" /></i>
                    <p>Riwayat Kesehatan</p>
                </label>
            </div>
            <h2 className="p-2 mt-5 mx-3 text-2xl font-bold">Status</h2>
            <div className="p-5 flex flex-wrap gap-5 bg-slate-300">
                <p>Usia: 20</p>
                <p>11/11/2004</p>
                <p>NIK: 1124647983567343</p>
            </div>
        </div>
    )
}

export default UserProfil;
