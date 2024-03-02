import 'dotenv/config';
import { app } from './app.js';
import { connectDB } from './db/index.js';





connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`app is running on port ${process.env.PORT}`);
    })
}).catch(()=>{
    console.log("mongo db connection failed");
})


// app.use('/api/user',userRoutes)