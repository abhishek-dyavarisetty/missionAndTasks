const express = require("express");
const missionTasksRouter = express.Router();

const coreFunction = require("../includes/coreFunction");

missionTasksRouter.get("/mission-tasks", (request, response) => {
  if (coreFunction.isObjectEmpty(request.body)) {
    response.status(400).send("Invalid Request");
  } else {
    // console.log(request.body.task);
    let evaluateTask = request.body.task;
    let initialDependency =
      request.body.dependencyGraph.tasks[evaluateTask].dependency;
    if (coreFunction.isNullDependency(initialDependency)) {
      response.status(200).send({ open: true });
    } else {
    }
  }
});

module.exports = missionTasksRouter;
