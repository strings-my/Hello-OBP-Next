
import getConfig from 'next/config'
const {serverRuntimeConfig} = getConfig()

async function Login(req, res) {

    let API_HOST = serverRuntimeConfig.API_HOST
    let CONSUMER_KEY = serverRuntimeConfig.CONSUMER_KEY

    console.log("Host : " + API_HOST)
    console.log("Key : " + CONSUMER_KEY)
    const fetch = require("node-fetch");
    const response = await fetch(API_HOST + '/my/logins/direct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'DirectLogin username=Robert.Us.01,password=X!39670561,consumer_key=' + CONSUMER_KEY
        }
    }).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            return res.json(data)
        });
    });
}

export default Login;
