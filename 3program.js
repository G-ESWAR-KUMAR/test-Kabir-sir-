var express = require('express')
var {MongoClient} = require('mongodb')
var cors = require('cors')
var url = "mongodb+srv://Eswar_564:Eswar_564@cluster0.hem6r.mongodb.net/?retryWrites=true&w=majority"
var app = express()

var port =9009
app.use(cors())

app.get('/json',(req,res)=>{
     res.send({"name":"Kabir","city":"Delhi"})
})

app.get('/db',(req,res)=>{
     MongoClient.connect(url,(error,cluster)=>{
              if(error){
                  res.send("Error while connecting with the cluster")
              } else {
             var dbRef=cluster.db('User')
             var collectionRef=dbRef.collection('User_1')
                collectionRef.find().toArray((error,success)=>{
                     if(error){
                         res.send("error while getting the data from collection")
                     } else {
                         res.send(success)
                     }
                })
              }
     })
})

app.listen(port,()=>{
    console.log("Server started")
})