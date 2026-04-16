import { useState } from 'react';
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  // const tasks = [
  //   {id: 'task-1', title: 'Learn English', isDone: false},
  //   {id: 'task-2', title: 'Build project', isDone: true},
  // ];

const [tasks, setTasks] = useState([
    {id: 'task-1', title: 'Learn English', isDone: false},
    {id: 'task-2', title: 'Build project', isDone: true},
  ]);

const [newTaskTitle, setNewTaskTitle] = useState('');

const deleteAllTasks = () => {
  const isConfirmed = confirm('Are you sure, that you want to delete all?');
  console.log('Delete all tasks');
  if (isConfirmed) {
    setTasks([]);
  }
}

const deleteOneItem = (taskId) => {
  setTasks(
    tasks.filter((task) => task.id !== taskId)
  )
}

const toggleTaskComplete = (taskId, isDone) => {
  setTasks(tasks.map(task => {
    if (task.id === taskId) {
      return {...task, isDone}
    }
    return task;
  }));
}

const filterTasks = (query) => {
  console.log(`Searching: ${query}`);
}

const addTask = () => {
  if (newTaskTitle.trim().length > 0) {
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: newTaskTitle,
      isDone: false,
    }

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  }
}

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm 
        onSearchInput={filterTasks}
      />
      <TodoInfo 
        total={tasks.length}
        done={tasks.filter(({isDone}) => isDone).length}
        onDeleteAllButtonClick = {deleteAllTasks} 
      />
      <TodoList 
        tasks={tasks} 
        onDeleteOneItemClick = {deleteOneItem}
        onTaskCompleteChange = {toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
