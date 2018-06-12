var express =   require("express");
var router = express.Router();

// load index page 
router.get('/',function(req, res){
  res.render('index');
});

//recive message from form
router.post('/send-message',function(req, res){
  var obj = {
    name: req.body.name,
    email:req.body.email,
    phone_number: req.body.phone_number,
    message: req.body.message
  }
  //return message with parms form
  res.send("Recived message: "+obj.name +" "+ obj.email +" "+ obj.phone_number +" "+ obj.message);
});

module.exports = router;