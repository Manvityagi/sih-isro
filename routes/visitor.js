const router = require("express").Router();
const Visitor = require("../models/visitor");

router.get("/checkin", async (req, res) => {
  res.render("visitor_checkin");
});


// checkin the visitor,
router.post("/checkin", async (req, res) => {
  try {

    visitor = await Visitor.create(req.body);
    await visitor.save();
    console.log(visitor);
    res.redirect("/visitor/checkin");
  } catch (err) {
    console.log(err);
    res.redirect("/visitor/checkin");
  }
});

module.exports = router;
