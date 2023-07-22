const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://nodejsme:tk4tushar@cluster0.ubz6hws.mongodb.net/?retryWrites=true`,{      
    dbName:"Olympics", 
}).then(()=>{
    console.log("connection succefull")
}).catch((e)=>{
    console.log("no connection")
})