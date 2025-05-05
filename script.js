function addFocus() {
  let name = prompt("הכנס שם מיקוד אסטרטגי:");
  if (name) {
    document.getElementById("output").innerHTML += `<p>🧭 ${name}</p>`;
  }
}
