import React from "react";
import { Link } from "react-router-dom"

const Login = () => {

    return (
        <div className="login-form">
            <form action="home" method="post">
                <h2 className="text-center">Log in</h2>
                <div className="form-group">
                    <input name="username" type="text" className="form-control" placeholder="Username" required="required"></input>
                </div>
                <div className="form-group">
                    <input name="password" type="password" className="form-control" placeholder="Password" required="required"></input>
                </div>
                <div className="form-group">
                    <Link to="/home">
                        <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                    </Link>
                </div>
                <Link to="/">
                    <li className="link-li">Back</li>
                </Link>
            </form>
        </div>
    );
};

export default Login;
