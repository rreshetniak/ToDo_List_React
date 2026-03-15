import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { 
    tasks = [], 
    onDeleteTaskButtonClick, 
    onTaskCompleteChange,
    filteredTasks,
  } = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;
  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet!</div>;
  }
  
  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Taks not found!</div>;

  }
  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange = {onTaskCompleteChange}
          className="todo__item"
          id={task.id}
          title={task.title}
          isDone={task.isDone}
        />
      ))}
    </ul>
  );
};

export default TodoList;
