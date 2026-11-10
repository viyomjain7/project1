import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
import connectDB from "./db/index.js";
connectDB()
// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERROR: ",error);
//        })
       
//        app.listen(process.env.PORT, () => {
//         console.log(`listening on ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.log("ERROR: ",error)
//         throw error
//     }
// })()
