const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const cors = require('cors');
const path = require("path");

app.use(cors());




dotenv.config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))

//mongodb conncetion
main().catch(err => console.log(err));

async function main() {
   await mongoose.connect("mongodb+srv://chaitanyawaskar710:Ku83bNBmdStOclQh@cluster0.wrr0gws.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})
   .then(()=>{
    console.log("CONNECTED TO DB ..");
   })
   .catch(err=>{
    console.log("ohh no" + err);
   })
}

//image uploading
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cd)=>{
        cd(null,req.body.name);
    }
});

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded.");
})


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute); 
app.use("/api/posts",postRoute); 
app.use("/api/categories",categoryRoute); 





app.listen(5000,()=>{
    console.log("Backend is running ..");
})
