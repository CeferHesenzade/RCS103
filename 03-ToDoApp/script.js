function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = taskInput.value;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}
