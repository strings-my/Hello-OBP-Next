
import React from 'react'
import Head from 'next/head'
import Router from "next/router"

// Bootstrap Sass
import '../sass/style.scss';
import fetch from 'isomorphic-unfetch';
import {getCookie, setCookie} from "../utils/cookiesHandler"
import getConfig from 'next/config'
const {serverRuntimeConfig} = getConfig();

const doLogin =  async () => {

    const data = {
        'username' : document.getElementById("inUsername").value,
        'password' : document.getElementById("inPassword").value
    };

    await fetch('/api/login',
        {
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
        response.json().then(function(data) {
                setCookie("token",data.token)
            }
        );
        Router.push('/profile')
    })
}

function Login() {
    return (
        <div>
            <Head>
                <title>Login</title>
                <link rel='icon' href='/favicon.ico' />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet" />
                <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <section className="login module">
                            <section className="login-icon">
                                <div className="icon-container">
                                    <img src="/login-icon.png" className="img-responsive"
                                         alt="Login icon" />
                                </div>
                            </section>

                            <form className="login-form" method="post">
                                <div className="form-group">
                                    <input id="inUsername" type="text" className="form-control login-input" placeholder="Usernane" />
                                </div>
                                <div className="form-group">
                                    <input id="inPassword" type="password" className="form-control password-input" placeholder="Password" />
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /> Keep me signed in
                                    </label>
                                </div>
                            </form>

                            <div className="module-single-btn">
                                <button type="submit" className="btn btn-primary" onClick={() => doLogin()} >Submit</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .login {
                    max-width: 365px;
                    padding-bottom: 0;
                }

                    // Icon

                    .login-icon {
                    text-align: center;
                }

                    .icon-container {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    margin: 35px 0 60px;
                    padding: 48px;
                    border-radius: 50%;
                    box-shadow: 0 0 65px $navy-box-shadow;
                    background: #fff;
                }

                    // Form

                    .login-input, .password-input {
                    padding-left: 44px;
                    background-position: 17px;
                    background-repeat: no-repeat;
                }

                    .login-input {
                    background-image: url('/human-icon.svg');
                }

                    .password-input {
                    background-image: url('/lock-icon.svg');
                }

                    .checkbox {
                    margin: 20px 0;
                }

                    // CTA button

                    .login-cta {
                    text-align: center;
                    margin-top: 20px;
                }

                `}
            </style>
        </div>
    )
}

export default Login;