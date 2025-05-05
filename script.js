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

function render() {
  let out = "";
  focusAreas.forEach((f, i) => {
    out += `<h2>🧭 ${f.name} <button onclick="addTask(${i})">+ משימה</button></h2>`;
    f.tasks.forEach((t, j) => {
      out += `<div style="margin-right:20px">📌 ${t.title} <button onclick="addMilestone(${i}, ${j})">+ אבן דרך</button><ul>`;
      t.milestones.forEach((m, k) => {
        let check = m.done ? "✅" : "⬜";
        out += `<li onclick="toggleDone(${i}, ${j}, ${k})">${check} ${m.desc} (${m.due})</li>`;
      });
      out += "</ul></div>";
    });
  });

  document.getElementById("output").innerHTML = out;
}
