var express = require("express");
var router = express.Router();
var ticketsCtrl = require("../controllers/tickets");

/* GET users listing. */

router.post("/flights/:id/tickets", ticketsCtrl.create);
router.get("/flights/:id/tickets/new", ticketsCtrl.new);

module.exports = router;
