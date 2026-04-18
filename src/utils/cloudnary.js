import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";



// Configuration

    cloudinary.config({ 
        cloud_name: process.env.cloudinary_cloud_name, 
        api_key: process.env.cloudinary_api_key, 
        api_secret: process.env.cloudinary_api_secret // Click 'View API Keys' above to copy your API secret
    });




     const uploadOnCloudinary = async (localFilePath)=>{
        try{
            if(!localFilePath) return null;
            //uploade file on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath,{resource_type : "auto"})
            // File has been uploade successfully

            console.log("File Uploaded successfully",response);

            return response
        }
        catch(error){
           fs.unlink(localFilePath);
           //remove the temparary locally save file as uploade opration got failed
           return null;
        }
     }


     export {uploadOnCloudinary}



//     cloudinary.v2.uploader
// .upload("dog.mp4", {
//   resource_type: "video", 
//   public_id: "my_dog",
//   overwrite: true, 
//   notification_url: "https://mysite.example.com/notify_endpoint"})
// .then(result=>console.log(result));