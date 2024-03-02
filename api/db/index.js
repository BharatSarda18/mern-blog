import mongoose from 'mongoose';

export const connectDB=async()=>{
    try {
       const connection=await mongoose.connect('mongodb+srv://sardabharat71:sardabharat71@mern-blog.vj7zl6y.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog');
       console.log("coonected");
    } catch (error) {
        console.log(error,"error in database connection",process.env.MONG0);
        process.exit(1);
    }
}

