import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: 'dpmqjd6lf', 
  api_key: '472881589128945', 
  api_secret: 'j_BIZxpCfbaYQPZLKooJkr7FghY' 
});




const uploadOnCloudinary = async (loaclFilePath) => {
  try {
    if (!loaclFilePath) return null;
    const response = await cloudinary.uploader.upload(loaclFilePath, {
      resource_type: "auto",
    });

    console.log("File Has Uploaded On CLoudinary !!!", response.url);
    fs.unlinkSync(loaclFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(loaclFilePath); //remove the loacl temp file when upload failed
  }
};
export { uploadOnCloudinary };
