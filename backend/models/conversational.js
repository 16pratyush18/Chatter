import mongoose from "mongoose";

const conversationModel= new Mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectsId,
        ref:"User"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message";
    }],
});{timestamps:true}
export const Conversation= mongoose.model("Conversation", conversationModel);
