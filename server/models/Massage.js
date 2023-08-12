const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    massage:{
        type: String
    },
    createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 10, // The document will be automatically deleted after 10 minutes of its creation time
	},
})

const File = mongoose.model("File", fileSchema);
module.exports = File;