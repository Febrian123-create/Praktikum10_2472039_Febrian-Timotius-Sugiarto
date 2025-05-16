function addTask() {
    const task = prompt("Masukkan hal yang harus dilakukan");
    if (task) {
      const li = document.createElement("li");
      li.textContent = task;
      li.addEventListener("click", function () {
        const confirmDone = confirm("Sudah mengerjakan tugas ini?");
        if (confirmDone) {
          li.classList.toggle("completed");
        }
      });
      document.getElementById("taskList").appendChild(li);
    }
  }