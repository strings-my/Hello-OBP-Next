import React from 'react'
import '../sass/style.scss';
import fetch from 'isomorphic-unfetch';
import {getCookie} from "../utils/cookiesHandler";

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    onLoginClick = async () => {
        console.log(String(getCookie("token")))
        const res = await fetch(`https://apisandbox.strings.my/obp/v4.0.0/my/accounts?account_type_filter=330,CURRENT+PLUS&account_type_filter_operation=INCLUDE`,
            {
                method : 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'DirectLogin token="'+getCookie("token")+'"'
                }
            }).then(function(response) {
            response.json().then(function(data) {
                console.log(data);
            });
        });
        return <Profile/>};

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <section className="profile module">
                        <header className="profile-header">
                            <h3>John Doe</h3>
                            <p>Registered on 31/08/2017</p>
                            <img src="https://placehold.it/200x200" alt="John Doe profile image"/>
                        </header>

                        <section className="profile-stats">
                            <div className="stats-green"
                                 onClick={() => this.onLoginClick()} >
                                <strong>2</strong>
                                <span>Accounts</span>
                            </div>
                            <div className="stats-blue">
                                <strong>288.37</strong>
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
}

export default Profile
