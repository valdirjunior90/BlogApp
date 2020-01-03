if(process.env.NODE_ENV == "production"){
    module.exports ={mongoURI: "mongodb://junitroll:94219489@blogapp-shard-00-00-2ypwg.mongodb.net:27017,blogapp-shard-00-01-2ypwg.mongodb.net:27017,blogapp-shard-00-02-2ypwg.mongodb.net:27017/test?ssl=true&replicaSet=blogapp-shard-0&authSource=admin&retryWrites=true&w=majority"}
}else{
    module.exports ={mongoURI: 'mongodb://localhost/blogapp'}
}