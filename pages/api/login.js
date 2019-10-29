
import getConfig from 'next/config'
import {error} from "next/dist/build/output/log";
import {setCookie} from "../../utils/cookiesHandler";
const {serverRuntimeConfig} = getConfig();

async function Login(req, res) {
    let API_HOST = serverRuntimeConfig.API_HOST;
    let CONSUMER_KEY = serverRuntimeConfig.CONSUMER_KEY;

    const fetch = require("node-fetch");
    await fetch(API_HOST + '/my/logins/direct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'DirectLogin username='+req.body.username+',password='+req.body.password+',consumer_key=' + CONSUMER_KEY
        }
    }).then(function (response) {
        response.json().then(function (data) {
            if(response.ok)
                return res.json(data)
            else
                return res.json(error())
        });
    });
}

export default Login;
