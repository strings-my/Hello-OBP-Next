import React from 'react'
import Router from "next/router"
import Head from 'next/head'
import '../sass/style.scss';
import fetch from 'isomorphic-unfetch';
import jsCookie from 'js-cookie';
import {getCookie, setCookie} from "../utils/cookiesHandler";

const CONSUMER_KEY = "kuiknznqavm02ai452njrbko4zeqdvxecdhdlzbm";
const CONSUMER_SECRET = "0ggkuodnqschn3jsbwbh20rw3ugtcchyskvbie2x";
const STRING_ENDPOINT = "https://apisandbox.strings.my/my/";
const OPENBANK_ENDPOINT = "https://apisandbox.openbankproject.com/my";

// set up cookies

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: ''};
    }

    handleChange(token) {

    }

    onLoginClick = async () => {
        let inUsername = document.getElementById("inUsername").value;
        let inPassword = document.getElementById("inPassword").value;
        let endpoint = OPENBANK_ENDPOINT;
        let consumer = CONSUMER_KEY;

        console.log('DirectLogin username="'+String(inUsername)+'", password="'+String(inPassword)+'", consumer_key="'+String(consumer)+'"');

        await fetch(String(endpoint)+'/logins/direct',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'DirectLogin username="'+String(inUsername)+'",password="'+String(inPassword)+'",consumer_key="'+String(consumer)+'"'
                }
            }).then(function (response) {
                response.json().then(function(data) {
                    console.log(data);
                    setCookie("token",data.token)
                    }
                );

            if (response.ok) {
                Router.push('/profile')
            }

        });
    };

    render() {
        return (
            <div>
                <Head>
                    <title>Login</title>
                    <link rel='icon' href='/favicon.ico' />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
                </Head>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <section className="login module">
                                <section className="login-icon">
                                    <div className="icon-container">
                                        <img src="/login-icon.png" className="img-responsive"
                                             alt="Login icon"/>
                                    </div>
                                </section>

                                <form className="login-form" method="post">
                                    <div className="form-group">
                                        <input id="inUsername" type="text" className="form-control login-input" placeholder="Login"/>
                                    </div>
                                    <div className="form-group">
                                        <input id="inPassword" type="password" className="form-control password-input" placeholder="Password"/>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Keep me signed in
                                        </label>
                                    </div>
                                </form>

                                <div className="module-single-btn">
                                    <button type="submit" className="btn btn-primary" onClick={() => this.onLoginClick()} >Submit</button>
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
}

export default Index;