import UserProfil from "../component/Layout/UserProfile";
import PenangananPoli from "../component/Layout/PenangananPoli";

const Penanganan = () => {
    return(
        <div className="h-full w-full items-center flex justify-center">
            <PenangananPoli />
            <UserProfil />
        </div>
    )
}

export default Penanganan;