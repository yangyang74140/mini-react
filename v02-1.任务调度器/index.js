let taskId = 1;
function workLoop(deadline) {
  taskId++;

  let shouldYield = false;
  while (!shouldYield) {
    const time = deadline.timeRemaining();
    console.log(`taskId${taskId}`);
    shouldYield = time < 1;
  }

  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);
