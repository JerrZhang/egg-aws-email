# Install 
```bash
npm install --save egg-aws-email
```

# Usage
```javascript
// {app_root}/config/plugin.js
exports.email = {
  enable: true,
  package: 'egg-aws-email',
};
```

# Configuration
```javascript
// {app_root}/config/config.default.js
exports.email = {
    client:{
        "accessKeyId": "your accessKeyId",
        "secretAccessKey": "your secretAccessKey",
        "region": "us-east-1"
    }
};
```

# Example 
```javascript
// {app_root}/app/controller/home.js
const Controller = require('egg').Controller;
module.exports = class HomeController extends Controller{
     async index(){
         this.ctx.app.email.sendMail({
            from: 'from@example.com',
            to: 'to@example.com',
            subject: 'Message',
            text: 'I hope this message gets sent!' // can use html:'html content'
         })
     }
}
```

# Questions & Suggestions
Please open an issue [here](https://github.com/JerrZhang/egg-aws-email/issues).