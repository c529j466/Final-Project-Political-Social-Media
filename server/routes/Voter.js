const User = require("../models/Voter");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const Voter = require("../models/Voter");

//update Voter
router.put("/:id", async (req, res) => {
  if (req.body.voterId === req.params.id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await Voter.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete Voter
router.delete("/:id", async (req, res) => {
  if (req.body.voterId === req.params.id) {
    try {
      await Voter.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});

//get a Voter
router.get("/:id", async (req, res) => {
  const voterId = req.query.voterId;
  const username = req.query.username;
  try {
    const user = voterId
      ? await Voter.findById(voterId)
      : await Voter.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//follow a Politician

router.put("/:id/follow", async (req, res) => {
  if (req.body.voterId !== req.params.id) {
    try {
      const user = await Politician.findById(req.params.id);
      const currentUser = await Voter.findById(req.body.voterId);
      if (!user.followers.includes(req.body.voterId)) {
        await user.updateOne({ $push: { followers: req.body.voterId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});

//unfollow a Politician

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.voterId !== req.params.id) {
    try {
      const user = await Politician.findById(req.params.id);
      const currentUser = await Voter.findById(req.body.voterId);
      if (user.followers.includes(req.body.voterId)) {
        await user.updateOne({ $pull: { followers: req.body.voterId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant unfollow yourself");
  }
});

module.exports = router;