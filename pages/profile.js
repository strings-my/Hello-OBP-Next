import React from 'react'
import Router from "next/router"
import Head from 'next/head'
import Nav from '../components/nav'
import '../sass/style.scss';
import fetch from 'isomorphic-unfetch';
import jsCookie from 'js-cookie';
import { getCookie } from "../utils/cookiesHandler";
import getConfig from 'next/config'

const checkAccount = async () => {
    alert("Clicked");
}

Profile.getInitialProps = async ({ req }) => {
    console.log("Logged in")

    const res = await fetch('http://localhost:3000/api/account')
    const json = await res.json()

    console.log ("JSON : " + JSON.stringify(json));
    return { ret: json }
}

function Profile (props) {
    return (
        <div className="row">
            <div className="col-xs-12">
                <section className="profile module">
                    <header className="profile-header">
                        <h3>John Doe</h3>
                        <p>Registered on 31/08/2017</p>
                        <img src="https://placehold.it/200x200" alt="John Doe profile image" />
                    </header>

                    <section className="profile-stats">
                        <div className="stats-green" onClick={() => checkAccount()} >
                            <strong>2</strong>
                            <span>Accounts</span>
                        </div>
                        <div className="stats-blue">
                            <strong>{props.ret.overall_balance.currency} {props.ret.overall_balance.amount}</strong>
                            <span>Balance</span>
                        </div>
                        <div className="stats-red">
                            <strong>7</strong>
                            <span>Messages</span>
                        </div>
                    </section>

                    <section className="profile-links">
                        <a href="#">
                            <i className="ion-images"></i>
                            <span>Link 1</span>
                        </a>
                        <a href="#">
                            <i className="ion-card"></i>
                            <span>Link 2</span>
                        </a>
                        <a href="#">
                            <i className="ion-android-checkbox-outline"></i>
                            <span>Link 3</span>
                        </a>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Profile
