// Require express router
const router = require("express").Router();

// Set requirements (from thoughts-controller)
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// -- Directs to: /api/thoughts <GET>
router.route("/").get(getAllThoughts).post(createThought);

// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// 'api/thoughts/:thoughtId/reactions'
router
  .route("/:thoughtId/reactions")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
