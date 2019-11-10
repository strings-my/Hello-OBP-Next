import React from 'react'
import Router from "next/router"
import Head from 'next/head'

// Bootstrap Sass
import '../sass/style.scss';
import fetch from 'isomorphic-unfetch';
import {getCookie, setCookie} from "../utils/cookiesHandler"
import getConfig from 'next/config'
const {serverRuntimeConfig} = getConfig();

const navigateLogin =  async () => {
    await Router.push('/login')
}

const navigateSignUp =  async () => {
    await Router.push('/signUp')
}
function Home() {
    return(
    <div>
        <Head>
            <title>Home</title>
            <link rel='icon' href='/favicon.ico' />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet" />
            <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        </Head>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <section className="login module">
                        <h1>Welcome to Strings</h1>
                        <h3>Future of banking</h3>

                        <div className="module-double-btn">
                            <button  className="btn btn-primary" onClick={() => navigateLogin()} >Login</button>
                            <button  className="btn btn-primary" onClick={() => navigateSignUp()} >SignUp</button>

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
export default Home;