const isObjectEmpty = obj => {
  if (Object.entries(obj).length === 0 && obj.constructor === Object) {
    return true;
  } else {
    return false;
  }
};

const isNullDependency = arr => {
  if (Array.isArray(arr) && arr[0] != undefined) {
    return false;
  } else {
    return true;
  }
};

// const getTaskStatus = () => {};

// var Stack = function() {
//   this.top = -1;
//   this.storage = [];
// };

// // Adds a value onto the end of the stack
// Stack.prototype.push = function(value) {
//   this.storage[++this.top] = value;
// };

// Removes and returns the value at the end of the stack
// Stack.prototype.pop = function() {
//   // Check to see if the stack is empty
//   if (this.top === -1) {
//     return;
//   }

//   var result = this.storage[this.top];
//   delete this.storage[this.top--];
//   return result;
// };

// Stack.prototype.empty = function() {
//   if (this.top === -1) {
//     return true;
//   } else {
//     return false;
//   }
// };

const dependencyLoop = (
  dependencyGraph,
  currentStatues,
  exploreStatus,
  evaluateTask,
  currentTaskDependency
) => {
  let loop = false;
  if (
    isNullDependency(currentTaskDependency) ||
    currentStatues[evaluateTask].status == "completed"
  ) {
    exploreStatus[evaluateTask] = 1;
    return true;
  }

  try {
    currentTaskDependency.forEach(element => {
      let currentTaskDependency = dependencyGraph[element].dependency;
      // console.log(isNullDependency(currentTaskDependency));
      // console.log("-------------");
      // console.log("(" + element + ", " + currentTaskDependency + ")");
      if (exploreStatus[element] == 0) {
        // console.log("ho saktha hai ");
      }
      if (exploreStatus[element] == undefined) {
        exploreStatus[element] = 0;
      }
      // console.log(element);
      // console.log(exploreStatus);
      loop = dependencyLoop(
        dependencyGraph,
        currentStatues,
        exploreStatus,
        element,
        currentTaskDependency
      );
    });
  } catch (err) {
    return false;
  }
  // console.log(loop);
  return loop;
};

const checkTaskOpenStatus = (dependencyGraph, currentStatues, evaluateTask) => {
  let currentTaskDependency = dependencyGraph[evaluateTask].dependency;
  let currentTaskStatus = currentStatues[evaluateTask].status;
  let status = true;
  if (
    isNullDependency(currentTaskDependency) ||
    currentTaskStatus == "completed"
  ) {
    return true;
  }
  for (let element = 0; element < currentTaskDependency.length; element++) {
    // console.log(currentTaskDependency[element]);
    if (
      isNullDependency(
        dependencyGraph[currentTaskDependency[element]].dependency
      ) ||
      currentStatues[currentTaskDependency[element]].status == "completed"
    ) {
      continue;
    } else {
      return false;
    }
  }
  return status;
};

module.exports = {
  isObjectEmpty,
  isNullDependency,
  // Stack,
  dependencyLoop,
  // ExploreStatus,
  checkTaskOpenStatus
};
