import {Routes, Route} from "react-router-dom"
import Layout from "../component/Layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";


const AppRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Layout />}
            >
                <Route index element={<Home />}/>
                <Route path="login" element={<Login />}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;