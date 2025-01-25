import LoginFeat from "../component/UI/LoginFeat";
import Register from "../component/UI/Register";

const Login = () => {
    return(
        <div className="h-full w-full flex items-center justify-center">
            <LoginFeat />
            <Register />
        </div>
    )
}

export default Login;