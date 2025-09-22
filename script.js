document.getElementById("show").addEventListener("click", () => {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      document.getElementById("output").textContent = "Error: " + err;
    });
});
