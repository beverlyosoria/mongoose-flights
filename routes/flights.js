var express = require("express");
var router = express.Router();
var flightsCtrl = require("../controllers/flights");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});
router.get("/", flightsCtrl.index);
router.get("/:id", flightsCtrl.show);
router.get("/", flightsCtrl.create);

module.exports = router;
