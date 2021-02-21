var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const tasks = [
    {
      id: 1,
      title: "Learn React",
      description: "Learn how to use react in building web app",
    },
    {
      id: 2,
      title: "Learn Node",
      description: "Learn how to use node in building server",
    },
    {
      id: 3,
      title: "Learn Array Manipulation",
      description: "Learn how to manipulate arrays in javascript",
    },
  ];
  res.json(tasks);
});

module.exports = router;
