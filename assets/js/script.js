var formEL = document.querySelector("#task-form");
var tasksToDoEL = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
        alert("Your need to fill out the task form!");
        return false;
    }

    formEL.reset();

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEL(taskDataObj);
}

var createTaskEL = function(taskDataObj) {
    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item";

    var taskInfoEL = document.createElement("div");
    taskInfoEL.className = "task-info";
    taskInfoEL.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEL.appendChild(taskInfoEL);
    tasksToDoEL.appendChild(listItemEL);
}

formEL.addEventListener("submit", taskFormHandler);
