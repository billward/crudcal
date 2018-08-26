var Event = require('../models/event');

//Simple version, without validation or sanitation
exports.test = function (req, res, next) {
    res.send('Greetings from the Test controller!');
};

exports.event_create = function (req, res, next) {
    console.log('event_create()');

    const util = require('util')

    var event = new Event(
        {
            name: req.body.name,
            date: req.body.date
        }
    );

    console.log(util.inspect(event, {showHidden: false, depth: null}))

    event.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Event Created successfully')
    })
};

exports.event_list = function (req, res, next) {
    Event.find({}, function (err, event) {
        if (err) return next(err);
        res.send(event);
    })
};

exports.event_details = function (req, res, next) {
    Event.findById(req.params.id, function (err, event) {
        if (err) return next(err);
        res.send(event);
    })
};

exports.event_update = function (req, res, next) {
    Event.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, event) {
        if (err) return next(err);
        res.send('Event udpated.');
    });
};

exports.event_delete = function (req, res, next) {
    Event.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
