import { FiSidebar, FiSlack } from "react-icons/fi";

interface Toggle {
    toggle: boolean;
    toggleSide: () => void;
}

const SidebarDisplay = ({ toggle, toggleSide}: Toggle) => {
    return (
        <div className={`absolute flex items-center justify-center p-3 gap-5 
            ${toggle ? "opacity-100" : "opacity-0 pointer-events-none"} 
            transition-opacity duration-300 ease-in-out`}>
            <button 
                className='relative inline-block p-2 cursor-pointer rounded-md hover:bg-slate-100'
                onClick={toggleSide}
            >
                <FiSidebar className="size-6" />
                <span className="absolute top-2 right-2 bg-green-600 w-2 h-2 rounded-full"></span>
            </button>
            <div className='flex me-auto items-center hover: cursor-pointer'>
                <i><FiSlack className="size-9"/></i>
                <h1 className="text-sm">Klinik Sehat</h1>
            </div>
        </div>
    )
}

export default SidebarDisplay;