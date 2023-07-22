const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017",{      
    dbName:"Olympics", 
}).then(()=>{
    console.log("connection succefull")
}).catch((e)=>{
    console.log("no connection")
})