const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have a group size"],
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"],
  },
  diffuculty: {
    type: String,
    required: [true, "A tour must have a diffuculty"],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model("tour", tourSchema);

module.exports = Tour;

//   const testTour = new Tour({
//     name: "hugo3rwe",
//     rating: 4.7,
//     price: 997,
//   });

//   testTour
//     .save()
//     .then((doc) => console.log(doc))
//     .catch((err) => console.error(err));
