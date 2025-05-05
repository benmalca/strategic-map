let focusAreas = [];

function addFocus() {
  let name = prompt("הכנס שם מיקוד אסטרטגי:");
  if (name) {
    focusAreas.push({ name, tasks: [] });
    render();
  }
}

function addTask(index) {
  let title = prompt("הכנס שם משימה:");
  if (title) {
    focusAreas[index].tasks.push({ title, milestones: [] });
    render();
  }
}

function addMilestone(focusIndex, taskIndex) {
  let desc = prompt("תיאור אבן דרך:");
  let due = prompt("תאריך יעד (YYYY-MM-DD):");
  focusAreas[focusIndex].tasks[taskIndex].milestones.push({
    desc,
    due,
    done: false
  });
  render();
}

function toggleDone(focusIndex, taskIndex, milestoneIndex) {
  let m = focusAreas[focusIndex].tasks[taskIndex].milestones[milestoneIndex];
  m.done = !m.done;
  render();
}
