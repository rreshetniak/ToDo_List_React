const App = () => {
  const tasks = [
    'покормить собаку',
    'купить продукты',
    'написать отчёт',
    'пройти главу JSX React',
  ]
  return (
    <>
      <h1 className="title">To Do List</h1>
      <ul>
        {tasks.map((task) => <li key={task}>{task}</li>)}
      </ul>
    
    </>
  );
}

export default App;