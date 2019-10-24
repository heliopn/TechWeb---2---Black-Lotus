import React from "react";
import { Link } from "react-router-dom"

const CreateNew = props => {
    return (
        <div className="sign-form">
            <form action="home" method="post">
                <h2 className="text-center">Create New User!</h2>
                <div className="form-group">
                    <input name="username_sign" type="text" className="form-control" placeholder="Username" required="required"></input>
                </div>
                <div className="form-group">
                    <input name="password_sign" type="password" className="form-control" placeholder="Password" required="required"></input>
                </div>
                <div className="form-group">
                    <input name="conf_password_sign" type="confirmPassword" className="form-control" placeholder="Confirm Password" required="required"></input>
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

export default CreateNew;
