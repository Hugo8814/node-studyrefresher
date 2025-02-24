const express = require("express");
const tourController = require("../controllers/tourController.cjs");
const router = express.Router();

// using the checkID middleware
// router.param('id', tourController.checkID);

router
  .route("/")
  .get(tourController.getAllTours)
  .post( tourController.createTour);
router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
