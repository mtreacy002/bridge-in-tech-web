import React, { useState, useContext } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import _ from "underscore";
import AuthContext from "../AuthContext";
import BASE_API from "../config";

export default function Login() {
    const [errorMessage, setErrorMessage] = useState(null);
    const {isAuth,login} = useContext(AuthContext);
    const [user, setUser] = useState(null);
    
    const request_url = JSON.parse(JSON.stringify({BASE_API}))["BASE_API"]["BASE_API"] + "/login";
    
    const handleSubmit = async e => {
        e.preventDefault();

        let payload = {}
        new FormData(e.target).forEach((value, key) => {
            payload[key] = value;
        });

        const requestLogin = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        };
        fetch(request_url, requestLogin)
            .then(async response => {
                let data = await response.json();
                if (response.status === 200) {
                    if (!_.isEmpty(data)) {
                        login(data, user);
                        // let access_token = data["access_token"];
                        // let access_expiry = data["access_expiry"];
                        // Cookies.set("user", user);
                        // Cookies.set("access_token", access_token);
                        // Cookies.set("access_expiry", access_expiry);
                    }
                    return;
                }
                setErrorMessage(data["message"]);
            })
            .catch(() => setErrorMessage("The server is currently unavailable. Try again later"));
    }
    

    return isAuth ? 
    <Redirect to="/" />
    : (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form className="login-form mx-auto" onSubmit={handleSubmit}>
                        <form-group controlId="formUserame">
                            <p className="input-control">
                                <label htmlFor="username">Username or Email:</label>
                                <input className="field"
                                    type="text"
                                    name="username"
                                    placeholder="Username or Email"
                                    onChange={e => setUser(e.target.value)}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPassword">
                            <p className="input-control">
                                <label htmlFor="password">Password :</label>
                                <input className="field"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div>
                            {!_.isEmpty(errorMessage) && <span className="error" name="errorMessage" aria-label="errorMessage" role="alert">{errorMessage}</span>}
                        </div>
                        <div className="row">
                            <label>Not yet register? Sign Up here.</label>
                        </div>
                        <div className="row button-group">
                            <div className="col-sm">
                                <div className="row">
                                    <a className="btn btn-primary" id="registerbtn" href="/register" role="button">Sign Up</a>
                                </div>
                            </div>
                            <div className="col-sm"></div>
                            <div className="col-sm">
                                <button className="btn btn-success"
                                    variant="success"
                                    type="submit"
                                    name="submit"
                                    value="Login"
                                >Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}