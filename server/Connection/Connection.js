import mongoose from "mongoose";

const URI = "mongodb+srv://VighneshZagade:VighneshZagade@bloggyverse.okd2w8w.mongodb.net/?retryWrites=true&w=majority"
const Connection = () => {
    mongoose.connect(URI)
    .then(()=>{
        console.log('Database Connection Successful')
    })
    .catch((error)=>{
        console.log(error)
    })
}

export default Connection