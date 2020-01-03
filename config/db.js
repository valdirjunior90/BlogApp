if(process.env.NODE_ENV == "production"){
    module.exports ={mongoURI: "mongo_blogapp-prod:27017"}
}else{
    module.exports ={mongoURI: 'mongodb://localhost/blogapp'}
}