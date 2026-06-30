import { asyncHandler } from "../utils/asynchandler.js";

const registerUser = asyncHandler( async(req,res) =>{
    
   
    return res.json({
        success: true
    });
   
})
export {registerUser}
