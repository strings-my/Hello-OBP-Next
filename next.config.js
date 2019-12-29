const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    },
    serverRuntimeConfig: { // Will only be available on the server side
        API_HOST: "https://apisandbox.openbankproject.com/",
        CONSUMER_KEY: "kuiknznqavm02ai452njrbko4zeqdvxecdhdlzbm"
    },
    publicRuntimeConfig: { // Will be available on both server and client
        staticFolder: '/static'
    }
}));
