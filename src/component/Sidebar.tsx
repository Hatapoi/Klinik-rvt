import { FiSidebar, FiSlack } from "react-icons/fi";

const Sidebar = () => {
    return(
        <div className='w-[20%] h-full bg-slate-200'>
          <div className='flex p-3'>
            <div className='flex me-auto items-center'>
              <i><FiSlack className="size-9"/></i>
              <label>Klinik Sehat</label>
            </div>
            <button className='me-2'><FiSidebar className="size-6" /></button>
          </div>
          <div className='p-2 flex flex-col gap-3'>
            <div className='flex gap-1 ms-5'>
              <i></i>
              <label>Dashboard</label>
            </div>
          </div>
        </div>
    )
}

export default Sidebar;