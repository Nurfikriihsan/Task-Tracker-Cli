const fs = require("fs");
const path = require("path");

// Path to the JSON file
const TASK_FILE = path.join(__dirname, "tasks.json");

// Initialize the JSON file if it doesn't exist
if (!fs.existsSync(TASK_FILE)) {
  fs.writeFileSync(TASK_FILE, JSON.stringify([]));
}

// Load tasks from JSON file
function loadTasks() {
  const data = fs.readFileSync(TASK_FILE, "utf8");
  return JSON.parse(data);
}

// Save tasks to JSON file
function saveTasks(tasks) {
  fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 4));
}

// Add a new task
function addTask(description) {
  const tasks = loadTasks();
  const task = {
    id: tasks.length + 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(task);
  saveTasks(tasks);
  console.log(`Task added successfully (ID: ${task.id})`);
}

// Update task description
function updateTask(id, description) {
  const tasks = loadTasks();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.log("Task not found");
    return;
  }
  task.description = description;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log("Task updated successfully");
}

// Delete a task
function deleteTask(id) {
  let tasks = loadTasks();
  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== id);
  if (tasks.length === initialLength) {
    console.log("Task not found");
    return;
  }
  saveTasks(tasks);
  console.log("Task deleted successfully");
}

// Mark task as in-progress or done
function markTask(id, status) {
  const tasks = loadTasks();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.log("Task not found");
    return;
  }
  task.status = status;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Task marked as ${status}`);
}

// List tasks with optional status filter
function listTasks(filterStatus = null) {
  const tasks = loadTasks();
  const filteredTasks = filterStatus
    ? tasks.filter((task) => task.status === filterStatus)
    : tasks;
  if (filteredTasks.length === 0) {
    console.log("No tasks found");
    return;
  }
  filteredTasks.forEach((task) => {
    console.log(
      `[${task.id}] ${task.description} (${task.status}) - Created: ${task.createdAt}, Updated: ${task.updatedAt}`
    );
  });
}

// Main function to handle CLI commands
function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "add":
      if (!args[1]) {
        console.log("Usage: task-cli add <description>");
        return;
      }
      addTask(args[1]);
      break;

    case "update":
      if (!args[1] || !args[2]) {
        console.log("Usage: task-cli update <id> <description>");
        return;
      }
      updateTask(parseInt(args[1]), args[2]);
      break;

    case "delete":
      if (!args[1]) {
        console.log("Usage: task-cli delete <id>");
        return;
      }
      deleteTask(parseInt(args[1]));
      break;

    case "mark-in-progress":
      if (!args[1]) {
        console.log("Usage: task-cli mark-in-progress <id>");
        return;
      }
      markTask(parseInt(args[1]), "in-progress");
      break;

    case "mark-done":
      if (!args[1]) {
        console.log("Usage: task-cli mark-done <id>");
        return;
      }
      markTask(parseInt(args[1]), "done");
      break;

    case "list":
      const filterStatus = args[1] || null;
      listTasks(filterStatus);
      break;

    default:
      console.log("Unknown command");
      console.log(
        "Available commands: add, update, delete, mark-in-progress, mark-done, list"
      );
  }
}

main();
