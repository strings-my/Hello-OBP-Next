
import getConfig from 'next/config'
import {error} from "next/dist/build/output/log";
import {setCookie} from "../../utils/cookiesHandler";
const {serverRuntimeConfig} = getConfig();
const fetch = require("node-fetch");
let API_HOST = serverRuntimeConfig.API_HOST;
let CONSUMER_KEY = serverRuntimeConfig.CONSUMER_KEY;


async function Login(req, res) {

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

async function SignUp(req, res) {

    await fetch(API_HOST + '/obp/v4.0.0/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:{
            'email' : req.body.email,
            'username' : req.body.username,
            'password' : req.body.password
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
