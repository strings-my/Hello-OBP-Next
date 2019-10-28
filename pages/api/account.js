import {getCookie} from "../../utils/cookiesHandler"
import getConfig from 'next/config'
const {serverRuntimeConfig} = getConfig()

async function GetAccount(req, res) {

    const fetch = require("node-fetch");
    const response = await fetch('https://apisandbox.openbankproject.com/obp/v4.0.0/banks/rbs/balances', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'DirectLogin token="'+getCookie("token")+'"'
            'Authorization': 'DirectLogin token=eyJhbGciOiJIUzI1NiJ9.eyIiOiIifQ.qky_1qciudLAzFnaupjPuJj1LKtDUZbYYXXKwDDkUSE'
        }
    }).then(function (response) {
        response.json().then(function (data) {
            console.log("Account data : " +data);
            return res.json(data)
        });
    });
}

export default GetAccount;