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
  req.body.ticket = req.params.id;
  Ticket.create(req.body, (err, ticket) => {
    console.log(ticket);
    res.redirect(`/flights/${req.params.id}`);
  });
}
