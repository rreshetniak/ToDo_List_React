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


const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);
}

  return (

      <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm />
        <SearchTaskForm />
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
