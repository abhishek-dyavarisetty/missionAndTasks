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

var Stack = function() {
  this.top = -1;
  this.storage = [];
};

// Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
  this.storage[++this.top] = value;
};

// Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
  // Check to see if the stack is empty
  if (this.top === -1) {
    return;
  }

  var result = this.storage[this.top];
  delete this.storage[this.top--];
  return result;
};

Stack.prototype.empty = function() {
  if (this.top === -1) {
    return true;
  } else {
    return false;
  }
};

// Stack.prototype.top = function() {
//   return this.storage[this.top];
// };

// let dependencyLoop = (
//   dependencyStack,
//   dependencyGraph,
//   currentStates,
//   evaluateTask
// ) => {
//   console.log("yes");
//   let currentTaskDependency = dependencyGraph[evaluateTask].dependency;
//   let currentTaskStatus = currentStates[evaluateTask].status;
//   let count = 0;
//   console.log(evaluateTask);
//   console.log(dependencyStack);
//   //   console.log(currentTaskDependency);
//   //   console.log(currentTaskStatus);
//   if (
//     isNullDependency(currentTaskDependency) ||
//     currentTaskStatus === "completed"
//   ) {
//     console.log("in");
//     dependencyStack.pop();
//     console.log(dependencyStack);
//     currentStates[evaluateTask].status = "completed";
//     console.log(currentStates);
//     return false;
//     return dependencyLoop(
//       dependencyStack,
//       dependencyGraph,
//       currentStates,
//       dependencyStack.top
//     );
//   } else {
//     currentTaskDependency.forEach(element => {
//       // if (
//       //     isNullDependency(currentTaskDependency) ||
//       //     currentTaskStatus === "completed"
//       //   ) {

//       //   }
//       dependencyStack.push(element);
//       let loop = dependencyLoop(
//         dependencyStack,
//         dependencyGraph,
//         currentStates,
//         element
//       );
//       if (loop == false) {
//         // console.log("false");
//         // return;
//         count = count + 1;
//       }
//     });
//     console.log("coount = " + count);
//     if (count == currentTaskDependency.length) {
//       dependencyStack.pop();
//       currentStates[evaluateTask].status = "completed";
//       console.log("helllo");
//       console.log(currentStates[evaluateTask].status);
//     }
//   }
//   //   if (isNullDependency(taskDependency) || currentTaskStatus === "completed") {
//   //     return false;
//   //     // taskDependency.forEach(element => {
//   //     //   let taskStatus = currentStates[element].status;
//   //     //   if (taskStatus === "pending") {
//   //     //     dependencyStack.push(element);
//   //     //   }
//   //     // });
//   //     // depedencyLoop(
//   //     //   dependencyStack,
//   //     //   dependencyGraph,
//   //     //   currentStates,
//   //     //   dependencyStack.storage[dependencyStack.top]
//   //     // );
//   //     console.log(dependencyStack);
//   //   } else {
//   //     // dependencyStack.pop(evaluateTask);

//   //   }
// };

// let dependencyLoop = (dependencyGraph, currentStates, evaluateTask) => {
//   let dependencyStack = new Stack();
//   let currentTaskDependency = dependencyGraph[evaluateTask].dependency;
//   currentTaskDependency.forEach(element => {
//     if (
//       !isNullDependency(dependencyGraph) ||
//       currentStates[evaluateTask] !== "completed"
//     ) {
//       dependencyStack.push(element);
//     }
//   });
//   console.log(dependencyStack);
//   if (!dependencyStack.empty()) {
//   }
// };

// let dependencyLoop = (
//   dependencyStack,
//   dependencyGraph,
//   currentStates,
//   exploredTask,
//   evaluateTask
// ) => {
//   // console.log(evaluateTask);
//   // console.log(dependencyGraph[evaluateTask]);
//   // return;
//   let topElement = dependencyStack.storage[dependencyStack.top];
//   let currentTaskDependency = dependencyGraph[evaluateTask].dependency;
//   let currentTaskStatus = currentStates[evaluateTask].status;
//   if (
//     isNullDependency(currentTaskDependency) ||
//     currentTaskStatus == "completed"
//   ) {
//     dependencyStack.pop();
//     currentStates[evaluateTask].status = "completed";
//     dependencyLoop(
//       dependencyStack,
//       dependencyGraph,
//       currentStates,
//       exploredTask,
//       topElement
//     );
//   } else {
//     currentTaskDependency.forEach(element => {
//       dependencyStack.push(element);
//       if (exploredTask[element] == undefined) {
//         exploredTask[element] = 1;
//       }
//     });
//     if (exploredTask[topElement] !== 0) {
//       exploredTask[topElement] == 0;
//       dependencyLoop(
//         dependencyStack,
//         dependencyGraph,
//         currentStates,
//         exploredTask,
//         topElement
//       );
//     } else {
//       console.log("nahi ho saktha");
//       // return;
//     }
//   }

//   console.log(dependencyStack);
//   console.log(dependencyStack.storage[dependencyStack.top]);
// };

// let dependencyLo

// let dependencyLoop = ()

module.exports = {
  isObjectEmpty,
  isNullDependency,
  Stack,
  dependencyLoop
};
