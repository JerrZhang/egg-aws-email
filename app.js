const awsTransporter = require('./lib/transporter');

module.exports = app => {
    app.addSingleton('email', email);
}

function email(config) {
    return awsTransporter.create(config)
}