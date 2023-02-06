import React from "react";
import '../Styles/Bulma.css'
import LoginForm from "../Components/LoginForm";
import LoginFormFail from "../Components/loginFormFail";
import { useSearchParams } from "react-router-dom";


const Login = () => {
    const [searchparams] = useSearchParams();

    if (searchparams.get("id") === "fail"){
        return (
            <div>
                <LoginFormFail />
            </div>
        );
    } else {
        return(
            <div>
                <LoginForm />
            </div>
        );
    }

}

export default Login;