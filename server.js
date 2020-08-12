const express = require('express')
const app = express()
const {port} = require('./config')

app.use(express.json())
app.use(express.urlencoded({
	extended:true
}))

const magazineC = require('./controllers/magazineController')

app.get('/',function(req,res){
	return res.send('<center><h1>Hello this is STREETS TALK</h1> <br> Port:'+port+'</center>')
})

/*****************************************
		Magazine routes	
*****************************************/
//Show all magazines
app.get('/magazines',magazineC.showMagazines)

//Show magazine
app.get('/magazine/:id',magazineC.showMagazine)

//Add a new magazine
app.post('/magazine',magazineC.createMagazine)

//Edit magazine
app.put('/magazine',magazineC.editMagazine)

//Delete magazine
app.delete('/magazine',magazineC.deleteMagazine)

app.listen(port,function(){
	console.log('Port: '+port)
})

module.exports = app;
