if(process.env.NODE_ENV == "production"){
    module.exports ={mongoURI: "mongodb+srv://junitroll:94219489@blogapp-2ypwg.mongodb.net/test?retryWrites=true&w=majority"}
}else{
    module.exports ={mongoURI: 'mongodb://localhost/blogapp'}
}