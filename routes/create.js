var express = require('express');
var router = express.Router();
global.webhooksIdCounter = 0;
global.webhooks = [];
/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log(req.body)
  var webhook = { created_at: new Date(), id: global.webhooksIdCounter, event_name: req.body.data.event_name || 'DEFAULT' };
  global.webhooks.push(webhook)
  global.webhooksIdCounter = global.webhooksIdCounter + 1;

  
  res.send(webhook);
});

module.exports = router;
