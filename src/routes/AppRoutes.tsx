import {Routes, Route} from "react-router-dom"
import Layout from "../component/Layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PoliList from "../pages/PoliList";


const AppRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Layout />}
            >
                <Route index element={<Home />}/>
                <Route path="login" element={<Login />}/>
                <Route path="poli" element={<PoliList />}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;