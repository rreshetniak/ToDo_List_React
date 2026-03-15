import { useEffect, useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import SearchTaskForm from "../components/SearchTaskForm";
import TodoInfo from "../components/TodoInfo";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      { id: "task-1", title: "Buy milk", isDone: false },
      { id: "task-2", title: "Read book", isDone: true },
    ];
  });

  const [searchQuery, setSearchQuery] = useState('');

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const deleteAllTasks = () => {
    // console.log("Delete all tasks");
    const isConfirm = confirm(
      "Are you sure that you want to delete all tasks?",
    );

    if (isConfirm) {
      setTasks([]);
    }
  };

  const deleteTask = (taskId) => {
    // console.log(`Delete task with ID: ${taskId}`);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompleted = (taskId, isDone) => {
    // console.log(`The task ${taskId} ${isDone ? "Completed" : "NotCompleted"}`);
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }
        return task;
      }),
    );
  };

  // const filterTask = (query) => {
  //   console.log(`Search: ${query}`);
  // };

  const addTask = () => {
    // console.log("Task was added");
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString,
        title: newTaskTitle,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setSearchQuery("");
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const clearSearchQuery = searchQuery.trim().toLocaleLowerCase();
  const filteredTasks = clearSearchQuery.length > 0 
    ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
    : null; 

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        onAddTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm 
        // onSearchInput={filterTask} 
        searchQuery = {searchQuery}
        setSearchQuery = {setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks = {tasks}
        filteredTasks = {filteredTasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskCompleted}
      />
    </div>
  );
};

export default Todo;
