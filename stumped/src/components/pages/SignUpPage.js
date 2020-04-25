import React from "react";
import { render } from "react-dom";

class SignUpPage extends React.Component {
    submit = data => {
        console.log(data);
};

render() {
    return (
       <div>
            <h1>Sign up to start contributing!</h1>

        </div>
        );
    }
}

export default SignUpPage;