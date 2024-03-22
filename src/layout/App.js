import { Outlet } from 'react-router-dom';
import List from '../componentes/List';
import Navbar from '../componentes/Navbar'
import { TasksProvider } from '../Context/Context';

function App() {

  return (

    <div className="tasks">
      <TasksProvider>
      <div className="sidebar">
        <List></List>
      </div>
      <div className="conteudo">
        <Navbar></Navbar>
        <Outlet />
      </div>
      </TasksProvider>
    </div>

  );
}

export default App;
