import mongoose from "mongoose";

const Connection = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('Database Connection Successful')
    })
    .catch((error)=>{
        console.log(error)
    })
}

export default Connection