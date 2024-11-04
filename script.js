const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const tasks=JSON.parse(localStorage.getItem("tasks")) || [];

let listOfTasks = []


function addTask(){
    const taskTest= taskInput.value.trim();
    if(taskTest === "") return;

    const task = {
        text: taskTest
     };
    
    tasks.push(task);
     localStorage.setItem("tasks", JSON.stringify(tasks));

     taskInput.value= "";
     displayTasks();
}
function deleteTask(index){
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}
function editTask(index){
    const newTaskText= prompt("Edit the Task: ", tasks[index].text );
    if(newTaskText !== null){
        tasks[index].text=newTaskText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        

        displayTasks();
    }
}  
function displayTasks(){
    taskList.innerHTML = "";

    tasks.map((task, index) => {
        
        const li = document.createElement("li");
        li.innerHTML= `
            <span>${task.text}</span>
            <hr>
            <button  class = "edit-button" onclick="editTask(${index})">Edit</button>
            <button  class = "delete-button" onclick="deleteTask(${index})">Delete</button>
            `;   
    taskList.appendChild(li);
});
}