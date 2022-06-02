const {Schema, model} = require('mongoose')

const clientShema = new Schema(
    {
        name:{
            type:String,
            require:[true, 'El nombre es requerido']
        },
        lastName:{
            type:String,
            require:[true, 'El apellido es requerido']
        },
        address:{
            type:String,
            required:[true, 'La dirección es requerida']
        },
        phone1:{
            type:String,
            required:[true, 'número de teléfono es requerido']
        },
        phone2:{
            type:String,
            require:false
        },
        email:{
            type:String,
            require:[true, 'Correo electrónico es requerido']
        },
        sexo:{
            type:String,
            require: [true, 'Sexo es requerido'],       
            maxlength: 1,
        },
        id_usuario:{
            type:String,
            require:false
        }
    }
)

module.exports = model("Client",clientShema)