import mongoose from "mongoose";


const ContactReqSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    
    email: {
        type: String,
        required: false
    },
   subject : {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
  

},
{
    timestamps:true,
    Collection:'ContactReq'
    
}

)

const ContactReq = mongoose.model("ContactReq",ContactReqSchema)
export default ContactReq