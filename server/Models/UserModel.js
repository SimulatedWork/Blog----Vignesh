import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        email: {
            type: String, 
            required: [true, "Email is Required!"], 
            unique: true
        }, 
        password: {
            type: String, 
            required: [true, "Password is Required!"],
            minlength: [6, "Password should have more than 6 characters"],
            select: true
        }, 
        firstName: {
            type: String, 
            required: [true, "First Name is Required!"]
        },
        lastName: {
            type: String, 
            required: [true, "Last Name is Required!"]
        }, 
        profileUrl:{type: String}, 
        friends: {type: String}
    },
    {timestamps: true}
)

const Users = mongoose.model('Users', userSchema)

export default Users