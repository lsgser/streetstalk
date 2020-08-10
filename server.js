const express = require('express')
const app = express()
const {port} = require('./config')

app.use(express.json())
app.use(express.urlencoded({
	extended:true
}))

app.get('/',function(req,res){
	return res.send('<center><h1>Hello</h1> <br> Port:'+port+'</center>')
})


app.listen(port,function(){
	console.log('Port: '+port)
})
