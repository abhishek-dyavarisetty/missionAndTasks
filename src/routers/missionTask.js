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
      let currentStates = request.body.currentState.tasks;
      let dependencyGraph = request.body.dependencyGraph.tasks;
      let dependencyStack = new coreFunction.Stack();
      let exploredTask = {};
      // initialDependency.forEach(element => {
      //   dependencyStack.push(element);
      // });
      // console.log(dependencyStack);
      // let dependencyLoop = coreFunction.dependencyLoop(
      //   dependencyStack,
      //   dependencyGraph,
      //   currentStates,
      //   evaluateTask
      // );
      // console.log(evaluateTask);
      let dependencyLoop = coreFunction.dependencyLoop(
        // dependencyStack,
        dependencyGraph,
        currenttatues,
        exploredTask,
        evaluateTask
      );
      console.log(dependencyLoop);
    }
  }
});

module.exports = missionTasksRouter;
