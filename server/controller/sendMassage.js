const File = require("../models/Massage");

exports.send = async(req, res) => {
    try{
        // extract id and massasge from body
        const {id, massage} = req.body;
        // create a massage object and insert it into db
        const response = await File.create({id, massage});
        // send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data:response,
                message:"massase sent successfully"
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