var express = require("express");
var router = express.Router();
let tasks = [
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

router.get("/", function (req, res, next) {
  res.json(tasks);
});

router.get("/:id", function (req, res, next) {
  res.json(tasks[req.params.id - 1]);
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  index = tasks.findIndex((x) => x.id === parseInt(id));
  tasks.splice(index, 1);
  res.status(200).json({ message: "post Deleted !" });
});

router.post("/", (req, res, next) => {
  const task = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
  };

  tasks.push(task);
});
router.put("/", (req, res, next) => {
  const id = req.body.id;

  index = tasks.findIndex((x) => x.id === parseInt(id));
  tasks[index].title = req.body.title;
  tasks[index].description = req.body.description;
});

router.get("/search/:searchTerm", function (req, res) {
  var response = [];
  if (typeof req.params.searchTerm != "undefined") {
    console.log("ana hna gowa");

    response = tasks.filter(function (task) {
      if (
        task.title.includes(req.params.searchTerm) ||
        task.description.includes(req.params.searchTerm)
      ) {
        return task;
      }
    });
  }
  res.json(response);
});
module.exports = router;
