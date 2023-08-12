const File = require("../models/Massage");

exports.chat = async(req, res) => {
    try{
        // extract id and massasge from body
        const allChat = await File.find({})
        .populate("massage").exec();
        console.log("pass");
        // console.log(allChat);

        // send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data:allChat,
                message:"massase fetch successfully"
            }
        )
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data:"internal error",
            message:err.message,
        })
    }
}