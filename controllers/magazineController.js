const db = require('../db')

/*****************************************
	CRUD functions for the magazine
*****************************************/
//Get all the magazines
exports.showMagazines = function(req,res){
	db.query("SELECT * FROM magazines",function(error,results,fields){
		if (error) throw error
		
		let mgs = ""
		if(results===undefined || results.length==0){
			msg = "No magazine(s)"	
		}else{
			msg = "Magazine(s) loaded"
		}

		return res.status(200).send({error:false,data:results,message:msg})
	})
}

//Get a single magazine
exports.showMagazine = function(req,res){
	let id = req.params.id

	if(!id){
		return res.status(400).send({error:true,message:'Magazine ID not provided'})
	}

	db.query("SELECT * FROM magazines WHERE id = ?",id,function(error,results,fields){
		if(error) throw error

		let msg = ""

		if(results===undefined || results.length == 0){
			msg = "Magazine not found"
			return res.status(404).send({message:msg})
		}else{
			msg = "Magazine retrieved"
		}
		
		return res.status(200).send({data:results[0],message:msg})	
	})
}

//Upload a new magazine
exports.createMagazine = function(req,res){
	let description = req.body.description
	let magazine_cover = req.body.magazine_cover
	let magazine = req.body.magazine
	let issue = req.body.issue
	
	if(!description || !magazine_cover || magazine || issue){
		return res.status(400).send({error:true,message:'Fill in all fields'})
	}else{
		db.query("INSERT INTO magazines (description,magazine_cover,magazine,issue) VALUE(?,?,?,?)",[description,magazine_cover,magazine,issue],function(error,results,fields){
			if (error) throw error
			
			return res.status(200).send({error:false,message:'Magazine added'})
		})
	}
}

//Edit a magazine
exports.editMagazine = function(req,res){
	let description = req.body.description
	let magazine_cover = req.body.magazine_cover
	let magazine = req.body.magazine
	let issue = req.body.issue
	let id = req.body.id
	
	if(!id){
		return res.status(400).send({error:true,message:'Magazine ID not provided'})
	}

	if(!description || !magazine_cover || magazine || issue){
		return res.status(400).send({error:true,message:'Fill in all fields'})
	}else{
		db.query("UPDATE magazines SET description=?,magazine_cover=?,magazine=?,issue=? WHERE id=?",[description,magazine_cover,magazine,issue],function(error,results,fields){
			if(error) throw error
			
			return res.status(200).send({error:false,message:'Magazine edited'})
		})
	}
}

//Delete a magazine
exports.deleteMagazine = function(req,res){
	let id = req.body.id
	
	if(!id){
		return res.status(400).send({error:true,message:'Magazine ID is invalid'})
	}else{
		db.query("DELETE FROM magazines WHERE id=?",id,function(error,results,fields){	
			if (error) throw error
			
			return res.status(200).send({error:false,data:results,message:'Magazine deleted'})							
		})
	}
}
