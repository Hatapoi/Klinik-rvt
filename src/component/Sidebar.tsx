import { FiSettings, FiSidebar, FiSlack } from "react-icons/fi";
import { HiOutlineViewGrid } from "react-icons/hi";

interface Toggle {
  toggle: boolean
  toggleSide: () => void;
}

const Sidebar = ({ toggle, toggleSide }: Toggle) => {
    return(
        <form className={`fixed md:static w-72 h-full bg-slate-200 ${toggle ? "hidden" : ""} z-50`}>
          <div className='flex p-3'>
            <div className='flex me-auto items-center hover: cursor-pointer'>
              <i><FiSlack className="size-9"/></i>
              <h1 className="text-sm">Klinik Sehat</h1>
            </div>
            <button 
                className='p-2 cursor-pointer rounded-md hover:bg-slate-100'
                type="button"
                onClick={toggleSide}
            >
                <FiSidebar className="size-6" />
            </button>
          </div>
          <div className='p-4 flex flex-col'>
            <label className='flex items-center gap-2 ms-5 p-2 rounded-md hover:bg-slate-100 cursor-pointer'>
              <i><HiOutlineViewGrid className="size-6"/></i>
              <p>Dashboard</p>
            </label>
            <label className='flex items-center gap-2 ms-5 p-2 rounded-md hover:bg-slate-100 cursor-pointer'>
              <i><FiSettings className="size-6"/></i>
              <p>Pengaturan</p>
            </label>
          </div>
        </form>
    )
}

export default Sidebar;