// import React from 'react'
import Router from "next/router"
import Head from 'next/head'
// import '../sass/style.scss';
import fetch from 'isomorphic-unfetch';
import {setCookie} from "../utils/cookiesHandler"
import getConfig from 'next/config'
import Header from './header';

const CONSUMER_KEY = "kuiknznqavm02ai452njrbko4zeqdvxecdhdlzbm";
const CONSUMER_SECRET = "0ggkuodnqschn3jsbwbh20rw3ugtcchyskvbie2x";
const STRING_ENDPOINT = "https://apisandbox.strings.my/my/";
const OPENBANK_ENDPOINT = "https://apisandbox.openbankproject.com/my";
const {serverRuntimeConfig} = getConfig()


// Replace with internal API to cater CORS on OBP API
// const doLogin = async () => {
//     await fetch('https://apisandbox.openbankproject.com/my/logins/direct', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'DirectLogin username=Robert.Us.01,password=X!39670561,consumer_key=kuiknznqavm02ai452njrbko4zeqdvxecdhdlzbm'
//         }
//     }).then(function (response) {
//         response.json().then(function (data) {
//             console.log(data);
//             return res.json(data)
//         });
//     });
// }

const doLogin =  async () => {
    await fetch('/api/login',
    {
        method: 'GET'
    }).then(function (response) {
        console.log(response)
        setCookie("token", response.token)   
        // Router.push('/profile')
        window.location.href = "/profile"
    })
}

function Home() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row justify-content-center box-center">
                    <div className="col-md-8">
                        <div className="card-group">
                            <div className="card p-4">
                                <div className="card-body">
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <div className="input-group mb-3">
                                            <input className="form-control" type="text" placeholder="Username" />
                                        </div>
                                        <div className="input-group mb-4">
                                            <input className="form-control" type="password" placeholder="Password" />
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                            <button className="btn btn-primary px-4" type="button" onClick={() => doLogin()}>Login</button>
                                            </div>
                                            <div className="col-6 text-right">
                                                <button className="btn btn-link px-0" type="button">Forgot password?</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card text-white bg-primary py-5 d-md-down-none">
                                    <div className="card-body text-center">
                                        <div>
                                            <h2>Hello OBP</h2>
                                            <p>Welcome to OBP Web Based</p>
                                        <img src="/login-icon.png" className="img-responsive"
                                            alt="Login icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <style jsx>{`
                .box-center {
                    padding: 10% 0;
                }
                .app-header {
                    position: fixed;
                    top: 0;
                    width: 100%;
                }
                `}
            </style>
        </div>
    )
}

export default Home;