import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import useTasksLocalStoreage from "./useTasksLocalStorage";

const useTasks = () => {
  const { savedTasks, saveTasks } = useTasksLocalStoreage();
  const [tasks, setTasks] = useState(
    savedTasks ?? [
      { id: "task-1", title: "Learn English", isDone: false },
      { id: "task-2", title: "Build project", isDone: true },
    ],
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure, that you want to delete all?");
    console.log("Delete all tasks");
    if (isConfirmed) {
      setTasks([]);
    }
  }, []);

  const deleteOneItem = useCallback(
    (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone };
          }
          return task;
        }),
      );
    },
    [tasks],
  );

  const addTask = useCallback((title) => {
    //if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title,
        isDone: false,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current.focus();
    //}
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus();
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery),
        )
      : null;
  }, [searchQuery, tasks]);

  return {
    tasks,
    filteredTasks,
    deleteAllTasks,
    deleteOneItem,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
  };
};

export default useTasks;
