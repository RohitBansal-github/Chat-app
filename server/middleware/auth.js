import User from "../models/User.js";
import jwt from 'jsonwebtoken';

// middleware to protect routes

export const protectRoute = async (req, res, next) => {
    try {

        const token = req.headers.token;

        if (!token) return res.json({
            success: false,
            message: "No token provided"
        });


        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userID).select("-password");


        if (!user) return res.json({
            success: false,
            message: "User not found",
        })

        // console.log("User from token:", user);

        // this will add the user data in the request
        req.user = user;

        next();

    }
    catch (error) {

        console.log(error.message);

        res.json({
            status: false,
            message: error.message,
        })

    }
}
