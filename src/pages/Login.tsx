import { useState } from "react";
import LoginFeat from "../component/UI/LoginFeat";
import Register from "../component/UI/Register";

const Login = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    const switchForm = () => {
        setIsHidden(!isHidden)
    }

    return(
        <div className="h-full w-full flex items-center justify-center">
            <LoginFeat 
                toggle = {isHidden}
                regis= {switchForm}
            />
            <Register
                toggle = {isHidden}
                regis= {switchForm}
            />
        </div>
    )
}

export default Login;