import { Outlet } from 'react-router-dom';
import List from '../componentes/List';
import Navbar from '../componentes/Navbar'

function App() {

  return (

    <div className="tasks">
      <div className="sidebar">
        <List></List>
      </div>

      <div className="conteudo">
        <Navbar></Navbar>
        <Outlet />
      </div>
    </div>

  );
}

export default App;
