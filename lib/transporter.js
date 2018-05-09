let nodemailer = require('nodemailer');
let aws = require('aws-sdk');

module.exports = {
    create: function (config) {

        aws.config = Object.assign(aws.config, config);

        // create Nodemailer SES transporter
        return nodemailer.createTransport({
            SES: new aws.SES({
                apiVersion: '2010-12-01'
            })
        });


    }
}