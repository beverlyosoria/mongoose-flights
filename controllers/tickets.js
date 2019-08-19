var Flight = require("../models/flight");
var Ticket = require("../models/ticket");

module.exports = {
  create,
  new: newTicket
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render("tickets/new", {
      title: "Add Flight",
      flight,
      flightid: req.params.id
    });
  });
}

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    var ticket = new Ticket(req.body);
    ticket.save(function(err) {
      if (err) return res.redirect("/tickets/new");
      console.log(ticket);
      res.redirect(`/flights/${flight._id}`);
    });
  });
}
