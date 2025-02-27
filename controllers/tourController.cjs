const fs = require("fs");
const Tour = require("../models/tourModel.cjs");

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.getTour = async (req, res) => {
  try {
    const tours = await Tour.findById(req.params.id);
    //const tour = await Tour.findOne({ _id: req.params.id })

    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.updateTour = async (req, res) => {
  try {
   const  tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      
    })
    res.status(200).json({
      status: "success",
      data: {
        tour: "<Updated tour here...>",
      },
    });
    
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
    
  }
};

exports.deleteTour = (req, res) => {
  if (!tours) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};

// reading data from file
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// checking ID / middleware
// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour ID: ${val}`);
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }
//   next();
// };
