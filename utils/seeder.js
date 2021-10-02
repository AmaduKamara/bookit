const Room = require("../models/room");
const mongoose = require("mongoose");

const rooms = require("../data/rooms");

mongoose.connect("mongodb://localhost:27017/bookit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted in the database");

    await Room.insertMany(rooms);
    console.log("Rooms inserted into the database");

    process.exit();
  } catch (error) {
    console.log(error.mongoose);
    process.exit();
  }
};

seedRooms();
