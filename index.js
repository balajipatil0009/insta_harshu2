const { json } = require('express');
const express = require('express');
const User = require('./User.js');

const app = express();

const PORT = process.env.PORT || 8001;

require('./conn');

require('./User.js');

app.use(express.json());

app.get("/", (req, res)=>{
   res.send("done baby");
});

app.post("/login",(req, res)=>{
  const{name, password }= req.body;
  if(!name || !password){
     res.status(422).json({error: "all Fuields are required"});
  }else{
  const user = new User({name, password});
  user.save().then(()=>{
    console.log("saved");
  }).catch((err)=>{
    res.status(422).json({error: "technical issue"});
    console.log(err);
  });
  res.send(req.body);
}
});

if(process.env.NODE_ENV == "production" ){
    app.use(express.static("frontend/onchat-app/build"));
}

app.listen(PORT, ()=>{
    console.log('connected');
})