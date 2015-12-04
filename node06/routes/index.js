/**
 * Created by Window 7 on 2015/12/3.
 */

var express = require('express');
var app = express();
var router = express.Router();

module.exports=function(req,res,next){
    router.get('/', function(req, res) {
        res.render('login', { title: 'Express' });
    });
}
/* GET home page. */

