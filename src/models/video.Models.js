import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchma = new Schema(
    {
        videoFile:{
            type: String, // cloudinary url
            required : true
        },
        thumnail:{
            type: String, // cloudinary url
            required : true
        },
        title:{
            type: String, 
            required : true
        },
        discreption:{
            type: String, 
            required : true
        },
        duration:{
            type: Number, // cloudinary 
            required : true
        },
        views:{
            type: Number,
            default :0,
            required : true
        },
        ispublished:{
            type: Boolean,
            default: true,
            required : true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps : true,
    }
)


videoSchma.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchma);