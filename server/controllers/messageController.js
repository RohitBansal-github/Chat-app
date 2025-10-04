import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.js";
import User from "../models/User.js";
import {io,userSocketMap} from "../server.js"

// get all users except the logged in user

export const getUserForSidebar=async(req,res)=>{
    try{

        const userId=req.user._id;

        const filterUsers = await User.find({_id:{$ne:userId}}).select("-password");

        // count number of messages not seen
        const unseenMessages={}

        const promises=filterUsers.map(async(user)=>{
            const messages=await Message.find({senderId:user._id,recieverId:userId,seen:false})

            if(messages.length>0){
                unseenMessages[user._id]=messages.length;
            }
        })

        await Promise.all(promises);

        res.json({
            success:true,
            users:filterUsers,
            unseenMessages,
        })

    }
    catch(error){
        console.log(error.message);

        res.json({
            success:false,
            message:error.message,
        })        

    }
}

// get all messages for selected user

export const getMessages=async(req,res)=>{
    try{
        const {id:selectedUserId}=req.params;
        const myId=req.user._id;

        const messages=await Message.find({
            $or:[
                {senderId:myId,recieverId:selectedUserId},
                {senderId:selectedUserId,recieverId:myId},
            ]
        })

        await Message.updateMany({senderId:selectedUserId,recieverId:myId},{seen:true});

        res.json({
            success:true,
            messages:messages,
        })
    }
    catch(error){
        console.log(error.message);

        res.json({
            success:false,
            message:error.message,
        })
    }
}

// api to mark message as seen using message id
export const markMessageAsSeen=async(req,res)=>{
    try{
        const{id}=req.params;

        await Message.findByIdAndUpdate(id,{seen:true})

        res.json({success:true})
    }
    catch(error){
        console.log(error.message);
        res.json({
            success:false,
            message:error.message,
        })
    }
}

// send message to selected user

export const sendMessage=async(req,res)=>{
    try{

        const {text,image} = req.body;
        const recieverId= req.params.id;
        const senderId=req.user._id;

        let imageUrl;
        if(image){
            const upload=await cloudinary.uploader.upload(image);

            imageUrl=upload.secure_url;
        }

        const newMessage=await Message.create({
            senderId,
            recieverId,
            text,
            image:imageUrl,
        })

        // emit the new message to the reciever's socket
        const recieverSocketId=userSocketMap[recieverId];

        if(recieverSocketId){
            io.to(recieverSocketId).emit("newMessage",newMessage);
        }

        // Agar receiver online hai, to uske specific socket id par event bhej rahe hain.

        // "newMessage" ek custom event hai jisko frontend me client listen karega.

        // newMessage data (object) bheja jaa raha hai jisme actual message details hain.



        res.json({
            success:true,
            newMessage,
        })

    }
    catch(error){
        console.log(error.message);

        res.json({
            success:false,
            message:error.message,
        })
    }
}