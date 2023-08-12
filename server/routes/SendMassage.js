const express = require("express");
const router = express.Router();

const {send} = require("../controller/sendMassage");
const {chat} = require("../controller/chatMassage");

// api routes
router.get("/chat", chat);
router.post("/send", send);

module.exports = router;
