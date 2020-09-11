const express = require('express');
const app = express();
const path = require('path');
// const { nextTick } = require('process');
const forceSSL = function () {
    return function (req, res, next){
    if (req.headers['x-forwarded-proto']!=='http'){
        return res.redirect(
            ['https://',req.get('Host'),req.url].join('')
        );
    }
    next();
}
}
app.use(express.static(_dirname+'/dist/space'));
app.get('/*',function(req, res){
    res.sendFile(path.join(_dirname + '/dist/space'))
});
app.listen(process.env.PORT || 8080);
