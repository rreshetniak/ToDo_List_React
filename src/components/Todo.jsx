import AddTaskForm from "../components/AddTaskForm";
import SearchTaskForm from "../components/SearchTaskForm";
import TodoInfo from "../components/TodoInfo";
import TodoList from "../components/TodoList";

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'Buy milk', isDone: false},
    {id: 'task-2', title: 'Read book', isDone: true},
  ];
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo 
        total = {tasks.length}
        done = {tasks.filter(({isDone}) => isDone).length}
      />
      <TodoList tasks={tasks}/>
    </div>
  );
};

export default Todo;
