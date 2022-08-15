
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

module.exports.client_view = async (req, res) =>{
    try {
        const client = await Client.find().exec()
        if(!client.length) {
            message = 'No existen registros';
        }
        return res.status(200).json({
          client
        });
    }
    catch(e) {
        return res.status(500).json({
            message:'Error en la consulta'
        });
    }
}

module.exports.client_view_id = async (req, res) =>{
    try {
        const client = await Client.findOne({"_id":req.params._id})
        if(!client.length) {
            message = 'No existen registros';
        }
        return res.status(200).json({
          client
        });
    }
    catch(e) {
        return res.status(500).json({
            message:'Error en la consulta'
        });
    }
}


module.exports.client_update = async(req, res)=>{
    ud('update',req,res)
}   

module.exports.client_delete = async(req, res)=>{
    ud('delete',req,res)
} 

const ud =  async(action,req,res)=>{
    try{
        const {id} = req.params
        const body = req.body
        actionClient = ''
        
        const client = await Client.findById(id);
        if(!client) {
            return res.json({
                    success:false,
                    message : 'No existen registros'        
                    });
        }
        else{
            if (action==='update'){
                console.log('aaaaaaaaaaa')
                actionClient = await Client.findByIdAndUpdate(id,body,{
                    new:true,
                    runValidator:true
                });
            }
            else if (action === 'delete')
            {
                actionClient = await Client.findByIdAndDelete(id);
            }
            res.json(
                {
                    success:false,
                    message:`Client ${action} successfully`,
                    client: actionClient
                }
            )
        }
    }catch(e) {
        return res.status(500).json({
            message:'Error en la consulta'
        });
    }   
}