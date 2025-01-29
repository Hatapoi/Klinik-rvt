import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import SidebarDisplay from "./sidebarDisplay";

const Layout = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    const ToogleSidebar = () => {
        setIsHidden(!isHidden)
    }

    // Responsif otomatis berdasarkan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.matchMedia("(max-width: 940px)").matches; // sm breakpoint
            if (isSmallScreen) {
                setIsHidden(true); // Sembunyikan sidebar di layar kecil
            }
        };

        // Jalankan saat pertama kali komponen di-mount
        handleResize();

        // Tambahkan listener resize
        window.addEventListener("resize", handleResize);

        // Hapus listener saat komponen di-unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [setIsHidden]);

    return (
        <div className="h-screen w-screen overflow-x-hidden flex">
            <Sidebar
                toggle={isHidden}
                toggleSide={ToogleSidebar}
            />
            <main className="h-full w-full">
                <SidebarDisplay
                    toggle={isHidden}
                    toggleSide={ToogleSidebar}
                />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;