if(process.env.NODE_ENV == "production"){
    module.exports ={mongoURI: "mongodb://junitroll:94219489@mongo_blogapp-prod:27017/blogapp-prod"}
}else{
    module.exports ={mongoURI: 'mongodb://localhost/blogapp'}
}