import mongoose from "mongoose";

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URI = `mongodb+srv://salim_md:mdsalim@cluster0.5lx7gov.mongodb.net/crud_app`

const connectToMongo = async ()=>{
    try{
        const res = await mongoose.connect(URI);
        if(res){
            console.log("Database connected successfully")
        }
    } catch(error){
        console.log(error);
    }
}

export default connectToMongo;