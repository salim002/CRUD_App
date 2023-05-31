import userModel from '../models/user.js';

class userController
{
    static getAllUsers = async (req, res)=>{
        try {
            const allUsers = await userModel.find({});
            if(allUsers){
                return res.status(200).json(allUsers);
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    static createUser = async (req, res)=>{
        const {name, email, age} = req.body;
        try {
            if(name && email && age){
                const newUser = userModel({
                    // name: name,
                    // email: email,
                    // age: age

                    // If key and values are same then we can use key directly
                    name,
                    email,
                    age
                })
                const saved_user = await newUser.save();
                if(saved_user){
                    return res.status(201).json(saved_user);
                }
                else{
                    return res.status(400).json({"message": "something wrong happend"});
                }
            }
            else{
                return res.status(400).json({"message": "All fields are required"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    static getSingleUser = async (req, res)=>{
        const { id } = req.params;
        try {
            if(id){
                const getSingleData = await userModel.findById(id);
                if(getSingleData){
                    return res.status(200).json(getSingleData);
                }
                else{
                    return res.status(401).json({"message": "User not found"});
                }
            }
            else{
                return res.status(401).json({"message": "Id not found"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    static updateUser = async (req, res)=>{
        const {id} = req.params;
        try {
            if(id){
                const getUpdatedData = await userModel.findByIdAndUpdate(id, req.body);
                const finalUpdatedData = await userModel.findById(id);
                return res.status(200).json(finalUpdatedData);
            }
            else{
                return res.status(401).json({"message": "Id not found"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    static deleteUser = async (req, res)=>{
        const { id } = req.params;
        try{
            if(id){
                const getDeletedData = await userModel.findByIdAndDelete(id);
                // return res.status(200).json(getDeletedData);
                return res.status(200).json({"message": `${getDeletedData.name} has been deleted successfully`})
            }
            else{
                return res.status(400).json({"message": "Id not found"});
            }
        } catch(error){
            return res.status(400).json(error);
        }
    }
}

export default userController;