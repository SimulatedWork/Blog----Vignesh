import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        username: {
            type: String, 
            required: true
        }, 
        password: {
            type: String, 
            required: true
        }, 
        firstName: {
            type: String, 
            required: true
        },
        lastName: {
            type: String, 
            required: true
        }, 
        isAdmin: {
            type: Boolean, 
            default: false
        }, 
        profilePicture: String, 
        coverPicture: String, 
        about: String, 
        livesin: String,  
    },
    {timestamps: true}
)

const UserModel = mongoose.model('Users', userSchema)

export default UserModel