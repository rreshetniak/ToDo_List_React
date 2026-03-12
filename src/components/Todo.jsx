import AddTaskForm from "../components/AddTaskForm";
import SearchTaskForm from "../components/SearchTaskForm";
import TodoInfo from "../components/TodoInfo";
import TodoList from "../components/TodoList";

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'Buy milk', isDone: false},
    {id: 'task-2', title: 'Read book', isDone: true},
  ];

  const deleteAllTasks = () => {
    console.log('Delete all tasks');
  }

  const deleteTask = (taskId) => {
    console.log(`Delete task with ID: ${taskId}`);
  }

  const toggleTaskCompleted = (taskId, isDone) => {
    console.log(`The task ${taskId} ${isDone ? "Completed" : "NotCompleted"}`);
  }

  const filterTask = (query) => {
    console.log(`Search: ${query}`);
  }

  const addTask = () => {
    console.log("Task was added");
  }
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        onAddTask = {addTask}
      />
      <SearchTaskForm 
        onSearchInput = {filterTask}
      />
      <TodoInfo 
        total = {tasks.length}
        done = {tasks.filter(({isDone}) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList tasks={tasks}
        onDeleteTaskButtonClick = {deleteTask}
        onTaskCompleteChange = {toggleTaskCompleted}
      />
    </div>
  );
};

export default Todo;
