var express = require('express');
var bodyParser = require('body-parser');
var path    = require("path");
var request = require('request');
var google = require('google');

var app = express();
var http = require('http').Server(app);
var fs = require('fs');

const TelegramBot = require('node-telegram-bot-api');

const token = 'Your Telegram Bot Token Here';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

var port = process.env.PORT || 8080;

var router  = express.Router();

bot.onText(/how(.+)/i, (msg, match) => {
  const chat_id =  msg.chat.id
  google(match[0], function(err,res){
    if (err) console.error(err)

    if(res.links.length>0){
      var link = res.links[0]
      var message = link.title+', '+link.href+', '+link.description
      bot.sendMessage(chat_id, message)
    }
  })
})

bot.onText(/what(.+)/i, (msg, match) => {
  const chat_id =  msg.chat.id
  google(match[0], function(err,res){
    if (err) console.error(err)

    if(res.links.length>0){
      var link = res.links[0]
      var message = link.title+', '+link.href+', '+link.description
      bot.sendMessage(chat_id, message)
    }
  })
})

bot.onText(/where(.+)/i, (msg, match) => {
  const chat_id =  msg.chat.id
  google(match[0], function(err,res){
    if (err) console.error(err)

    if(res.links.length>0){
      var link = res.links[0]
      var message = link.title+', '+link.href+', '+link.description
      bot.sendMessage(chat_id, message)
    }
  })
})

bot.onText(/when(.+)/i, (msg, match) => {
  const chat_id =  msg.chat.id
  google(match[0], function(err,res){
    if (err) console.error(err)

    if(res.links.length>0){
      var link = res.links[0]
      var message = link.title+', '+link.href+', '+link.description
      bot.sendMessage(chat_id, message)
    }
  })
})

bot.onText(/who(.+)/i, (msg, match) => {
  const chat_id =  msg.chat.id
  google(match[0], function(err,res){
    if (err) console.error(err)

    if(res.links.length>0){
      var link = res.links[0]
      var message = link.title+', '+link.href+', '+link.description
      bot.sendMessage(chat_id, message)
    }
  })
})

bot.onText(/why(.+)/i, (msg, match) => {
  const chat_id =  msg.chat.id
  google(match[0], function(err,res){
    if (err) console.error(err)

    if(res.links.length>0){
      var link = res.links[0]
      var message = link.title+', '+link.href+', '+link.description
      bot.sendMessage(chat_id, message)
    }
  })
})


app.use('/', router);

http.listen(port, function(){
  console.log('listening on *:'+port);
});