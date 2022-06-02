const jwt_decode = require ('jwt-decode')
const Client = require('../models/Client')

module.exports.verifyUser = async (req,res,next) =>{
    if (typeof req.headers['authorization'] === 'undefined' && typeof req.body.id_user === 'undefined') 
    return res.status(400).json({message:'Falta parametro id_user'})


    if (req.headers['authorization'] === 'undefined'){
        var token = req.headers['authorization']
        var decoded = jwt_decode(token);
    }


    const client = await Client.findOne({id_usuario:decoded?decoded.id:req.body.id_user})
    if(client) return res.status(400).json({message:'The user has a account'})

    next();
} 

