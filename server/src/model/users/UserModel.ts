import {Schema, model} from 'mongoose';

export const UsersSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },

   password:{
        type:String,
        unique:false
    },
    phoneNumber:{
        type:String,
        unique:true
    }
})

export const UserModel = model("User", UsersSchema);