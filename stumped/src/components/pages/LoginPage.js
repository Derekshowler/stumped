import React from "react";
import LoginForm from "../forms/LoginForm";
import { render } from "react-dom";

class LoginPage extends React.Component {
    submit = data => {
        console.log(data);
};

render() {
    return (
       <div>
            <h1>Login page</h1>

            <LoginForm submit = {this.submit}/>
        </div>
        );
    }
}

export default LoginPage;