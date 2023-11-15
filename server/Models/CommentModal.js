import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId, 
        ref: "Users"
    }, 
    postId: {
        type: Schema.Types.ObjectId, 
        ref: "Posts"
    },
    comments: {
        type: String, 
        required: true
    }, 
    from: {
        type: String, 
        required: true
    },
    replies: [{
        repId: {
            type: mongoose.Schema.Types.ObjectId
        },
        userId:{
            type: Schema.Types.ObjectId, 
            ref: "Users"
        }, 
        from: {
            type: String
        }, 
        replyAt: {
            type: String
        }, 
        comment: {
            type: String
        }, 
        createdAt: {
            type: Date, 
            default: Date.now()
        }, 
        updatedAt: {
            type: Date, 
            default: Date.now()
        }, 
        likes: [{
            type: String
        }]
    }]
}, {timestamps: true})

const Comments = mongoose.model("Comments", commentSchema)

export default Comments