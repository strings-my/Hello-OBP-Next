async function LoginPage(req, res) {

    const fetch = require("node-fetch");
    const response = await fetch('https://apisandbox.openbankproject.com/my/logins/direct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'DirectLogin username=Robert.Us.01,password=X!39670561,consumer_key=kuiknznqavm02ai452njrbko4zeqdvxecdhdlzbm'
        }
    }).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            return res.json(data)
        });
    });
}

export default LoginPage;