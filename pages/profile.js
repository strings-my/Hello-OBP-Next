import React from 'react'
import Router from "next/router"
import Head from 'next/head'
import Nav from '../components/nav'
import '../sass/style.scss';
import fetch from 'isomorphic-unfetch';
import jsCookie from 'js-cookie';
import { getCookie } from "../utils/cookiesHandler";
import getConfig from 'next/config'
import Header from './header';
import Top from './top';

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
        // <div className="row">
        //     <div className="col-xs-12">
        //         <section className="profile module">
        //             <header className="profile-header">
        //                 <h3>John Doe</h3>
        //                 <p>Registered on 31/08/2017</p>
        //                 <img src="https://placehold.it/200x200" alt="John Doe profile image" />
        //             </header>

        //             <section className="profile-stats">
        //                 <div className="stats-green" onClick={() => checkAccount()} >
        //                     <strong>2</strong>
        //                     <span>Accounts</span>
        //                 </div>
        //                 <div className="stats-blue">
        //                     <strong>{props.ret.overall_balance.currency} {props.ret.overall_balance.amount}</strong>
        //                     <span>Balance</span>
        //                 </div>
        //                 <div className="stats-red">
        //                     <strong>7</strong>
        //                     <span>Messages</span>
        //                 </div>
        //             </section>

        //             <section className="profile-links">
        //                 <a href="#">
        //                     <i className="ion-images"></i>
        //                     <span>Link 1</span>
        //                 </a>
        //                 <a href="#">
        //                     <i className="ion-card"></i>
        //                     <span>Link 2</span>
        //                 </a>
        //                 <a href="#">
        //                     <i className="ion-android-checkbox-outline"></i>
        //                     <span>Link 3</span>
        //                 </a>
        //             </section>
        //         </section>
        //     </div>
        // </div>
        <div>
            <Top />
            <br/>
            <Header />
            <div className="container-fluid">
                <div id="ui-view"><div>
                    <div className="animated fadeIn">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">Bank Information</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="callout callout-info">
                                                            <small className="text-muted">Current Balance</small>
                                                            <br />
                                                            <strong className="h4">9,123</strong>
                                                            <div className="chart-wrapper">
                                                                <canvas id="sparkline-chart-1" width="100" height="30"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="callout callout-danger">
                                                            <small className="text-muted">Currency</small>
                                                            <br />
                                                            <strong className="h4">MYR</strong>
                                                            <div className="chart-wrapper">
                                                                <canvas id="sparkline-chart-2" width="100" height="30"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="callout callout-warning">
                                                            <small className="text-muted">Cards</small>
                                                            <br />
                                                            <strong className="h4">78,623</strong>
                                                            <div className="chart-wrapper">
                                                                <canvas id="sparkline-chart-3" width="100" height="30"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="callout callout-success">
                                                            <small className="text-muted">Loans</small>
                                                            <br />
                                                            <strong className="h4">49,123</strong>
                                                            <div className="chart-wrapper">
                                                                <canvas id="sparkline-chart-4" width="100" height="30"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <style jsx global>{`
                .app-header {
                    position: fixed !important;
                    top: 0;
                    width: 100%;
                }
                `}
            </style>
        </div>
    )
}

export default Profile
