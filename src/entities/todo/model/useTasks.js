import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import tasksAPI from "@/shared/API/tasks";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure, that you want to delete all?");
    console.log("Delete all tasks");
    if (isConfirmed) {
      // setTasks([]);
      tasksAPI.deleteAll(tasks).then(() => setTasks([]));
    }
  }, [tasks]);

  const deleteOneItem = useCallback(
    (taskId) => {
      tasksAPI.delete(taskId).then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      });
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
tasksAPI.toggleComplete(taskId, isDone).then(() => {
        setTasks(
          tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, isDone };
            }
            return task;
          }),
        );
      });
    },
    [tasks],
  );

  const addTask = useCallback((title) => {
    const newTask = {
      //id: crypto?.randomUUID() ?? Date.now().toString(),
      title,
      isDone: false,
    };

    tasksAPI
      .add(newTask)
      // .then((response) => response.json())
      .then((addedTask) => {
        setTasks((prevTasks) => [...prevTasks, addedTask]);
        setNewTaskTitle("");
        setSearchQuery("");
        newTaskInputRef.current.focus();
      });
  }, []);

  useEffect(() => {
    newTaskInputRef.current.focus();

    tasksAPI.getAll().then(setTasks);
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
