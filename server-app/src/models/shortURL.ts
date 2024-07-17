import mongoose, { mongo } from "mongoose";
import { nanoid } from "nanoid";

const shortURLschema = new mongoose.Schema({
    fullURL :{
        type : String,
        require : true
    },
    shortURL : {
        type : String,
        require : true,
        default: () => nanoid().substring(0,10),
    },
    clicks : {
        type : Number,
        default : 0,
    },
}, {
    timestamps : true,
})

export const URLmodel = mongoose.model("ShortURL", shortURLschema);