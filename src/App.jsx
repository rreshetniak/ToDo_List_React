import Router from "./Router";
import TasksPage from "./pages/TasksPage";
import OneTaskPage from "./pages/OneTaskPage";

const App = () => {
  const routes = {
    '/' : TasksPage,
    '/tasks/:id' : OneTaskPage,
    '*' : () => <div>404 Page not found</div>,
  }
  return (
    <Router routes={routes} />
  )
}

export default App;
