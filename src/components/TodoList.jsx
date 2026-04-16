import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    onDeleteOneItemClick,
    onTaskCompleteChange,
  } = props
  const hasTasks = true;
  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }
  return (
    <ul className="todo__list">
      {tasks.map(({id, title, isDone}) => (
        <TodoItem 
          className="todo__item"
          key={id}
          id={id}
          title={title}
          isDone={isDone}
          onDeleteOneItemClick={onDeleteOneItemClick}
          onTaskCompleteChange={onTaskCompleteChange}
        />
      ))}
      {/* <TodoItem 
        className="todo__item"
        id="task-1"
        title="Create code"
        isDone={false}
      />
      <TodoItem
        className="todo__item"
        id="task-2"
        title="Wright summary"
        isDone={true}
      /> */}
    </ul>
  );
};
export default TodoList;
