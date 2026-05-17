import Router from "./routing/Router";
import TasksPage from "@/pages/TasksPage";
import OneTaskPage from "@/pages/OneTaskPage";
import './styles'

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
