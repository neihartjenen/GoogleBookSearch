
const db = require("../modules");

module.exports = {
    findAll: function(req, res) {
        db.Book.find(req.body).sort({id: -1}).then(dbModule => res.json(dbModule)).catch(err => res.status(422).json(err));

    },

    create: function(req, res) {
        db.Book.create(req.body).then(dbModule => res.json(dbModule)).catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.Book.findById({_id: req.parms.id}).then(dbModule => dbModule.remove()).then(dbModule => res.json(dbModule)).catch(err => res.status(422).json(err));
    }

}