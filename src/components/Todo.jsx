import { useState, useEffect, useRef, useCallback, useMemo, useContext } from "react";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import Button from "./Button";
import { TasksContext } from "../context/TasksContext";

const Todo = () => {
  // const [tasks, setTasks] = useState(() => {
  //   const savedTasks = localStorage.getItem("tasks");
  //   if (savedTasks) {
  //     return JSON.parse(savedTasks);
  //   }
  //   return [
  //     { id: "task-1", title: "Learn English", isDone: false },
  //     { id: "task-2", title: "Build project", isDone: true },
  //   ];
  // });

  // const [searchQuery, setSearchQuery] = useState("");
  // const [newTaskTitle, setNewTaskTitle] = useState("");

  // const newTaskInputRef = useRef(null);
  // const firstIncompleteTaskRef = useRef(null);
  // const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

  // const deleteAllTasks = useCallback(() => {
  //   const isConfirmed = confirm("Are you sure, that you want to delete all?");
  //   console.log("Delete all tasks");
  //   if (isConfirmed) {
  //     setTasks([]);
  //   }
  // }, []);

  // const deleteOneItem = useCallback(
  //   (taskId) => {
  //     setTasks(tasks.filter((task) => task.id !== taskId));
  //   },
  //   [tasks],
  // );

  // const toggleTaskComplete = useCallback(
  //   (taskId, isDone) => {
  //     setTasks(
  //       tasks.map((task) => {
  //         if (task.id === taskId) {
  //           return { ...task, isDone };
  //         }
  //         return task;
  //       }),
  //     );
  //   },
  //   [tasks],
  // );

  // const addTask = useCallback(() => {
  //   if (newTaskTitle.trim().length > 0) {
  //     const newTask = {
  //       id: crypto?.randomUUID() ?? Date.now().toString(),
  //       title: newTaskTitle,
  //       isDone: false,
  //     };

  //     setTasks((prevTasks) => [...prevTasks, newTask]);
  //     setNewTaskTitle("");
  //     setSearchQuery("");
  //     newTaskInputRef.current.focus();
  //   }
  // }, [newTaskTitle]);

  // useEffect(() => {
  //   console.log("Save data to the storage, because Task was changed", tasks);
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  // useEffect(() => {
  //   newTaskInputRef.current.focus();
  // }, []);

  // const filteredTasks = useMemo(() => {
  //   const clearSearchQuery = searchQuery.trim().toLowerCase();

  //   return clearSearchQuery.length > 0
  //     ? tasks.filter(({ title }) =>
  //         title.toLowerCase().includes(clearSearchQuery),
  //       )
  //     : null;
  // }, [searchQuery, tasks]);

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);
}

  return (

      <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm
          // addTask={addTask}
          // newTaskTitle={newTaskTitle}
          // setNewTaskTitle={setNewTaskTitle}
          // newTaskInputRef={newTaskInputRef}
        />
        <SearchTaskForm
          // searchQuery={searchQuery}
          // setSearchQuery={setSearchQuery}
        />
        <TodoInfo />
        <Button
          onClick={() =>
            firstIncompleteTaskRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Show first incomplete task
        </Button>
        <TodoList />
      </div>

  );
};

export default Todo;
