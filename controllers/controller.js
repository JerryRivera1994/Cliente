
const Client = require('../models/Client')
const jwt_decode = require ('jwt-decode')

module.exports.clientRegister = async (req,res) =>{
    try{
        const {name, lastName, address, phone1, phone2, sexo, email,id_user} = req.body;


        const newClient = new Client(
            {
                name,
                lastName,
                address,
                phone1,
                phone2,
                sexo,
                email,
                id_usuario:req.headers['authorization']?jwt_decode(req.headers['authorization']).id:id_user 
            }
        )
    
        const savedClient = await newClient.save();
    
        res.status(201).json({"msg":"Cliente registró correctamente"});  
    }
    catch(error){
        res.status(400).json({"msg":"Cliente no se registró"});  
    }
}

module.exports.clientView = async (req, res) =>{
    res.status(201).json({"msg":"Cliente registró correctamente"});  
}