const router = require("express").Router();

// render the host registration page
router.get("/", (req, res) => {
  res.render("host", getRenderData(req));
});


module.exports = router;
