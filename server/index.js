// app create karna h
const express = require("express");
const app = express();

// port find karna h
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware add karna h
app.use(express.json());

// DB se conect karna h
const db = require("./config/database");
db.connect();

// api routes mount karna h
const send = require("./routes/SendMassage");
app.use('/api/v1', send);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// server activate karna h
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})
