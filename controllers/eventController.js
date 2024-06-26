const Event = require('../models/Event');

const createEvent = async (req, res) => {
    const { title, description, date } = req.body;

    const event = new Event({ title, description, date });
    await event.save();

    res.status(201).json(event);
};

const getEvents = async (req, res) => {
    const events = await Event.find();
    res.json(events);
};

module.exports = { createEvent, getEvents };
