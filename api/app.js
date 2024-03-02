import express from 'express';
import cookieParser from 'cookie-parser';

const app=express();
//app.use(cors)
app.use(express.json());
app.use(cookieParser())
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

import postRoutes from "./routes/post.route.js";
//import commentRoutes from "./routes/comment.route.js";

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api/comment', commentRoutes);
 app.use('/api/post', postRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    console.log(Object.keys(err),"errerrerr====>")
    const errorMessage=err.message||"Internal server error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        errorMessage
    })
})

export {app};