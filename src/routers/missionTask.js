const express = require("express");
const missionTasksRouter = express.Router();

const coreFunction = require("../includes/coreFunction");

missionTasksRouter.get("/mission-tasks", (request, response) => {
  if (coreFunction.isObjectEmpty(request.body)) {
    response.status(400).send("Invalid Request");
  } else {
    // console.log(request.body.task);
    let evaluateTask = request.body.task;
    let currentStatues = request.body.currentState.tasks;
    let dependencyGraph = request.body.dependencyGraph.tasks;
    let exploreStatus = {};
    let currentTaskDependency = dependencyGraph[evaluateTask].dependency;
    // console.log(currentTaskDependency);
    let dependencyLoop = coreFunction.dependencyLoop(
      dependencyGraph,
      currentStatues,
      exploreStatus,
      evaluateTask,
      currentTaskDependency
    );
    // console.log(dependencyLoop);
    if (dependencyLoop == true) {
      let taskOpenStatus = coreFunction.checkTaskOpenStatus(
        dependencyGraph,
        currentStatues,
        evaluateTask
      );
      console.log(taskOpenStatus);
      if (taskOpenStatus == true) {
        response.status(200).send({ open: true });
      } else {
        response.status(200).send({ open: false });
      }
    }
  }
});

module.exports = missionTasksRouter;
