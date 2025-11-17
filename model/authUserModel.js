import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import {CONSTANTS} from "../config/config.js"
import OPTIONS from "../config/option.js";

const UserSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    otp: {
        type: String,
        required: false,
    },
    otpExpire: {
        type: Number ,
        required: false,
    },
    userRoles: {
        enum: OPTIONS.usersRoles.getAllRolesAsArray(),
        type: String,
        require: false,
      }, 

   },
   {
    timestamps:true,
    Collection:'User'
    
    } 

)

UserSchema.methods.genToken = function () {
    return jwt.sign({
        userId: this._id,
        email: this.email,
    },CONSTANTS.key, {
        expiresIn: "120"
    });
};
const User = mongoose.model("User",UserSchema)
export default User