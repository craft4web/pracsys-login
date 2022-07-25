import HeadName from './componentes/head';
import Login from './componentes/login';
import Logo from './componentes/logo';

import './App.css';

function App() {
  return (
    <div className="App">
      <HeadName />
      <div className='contenedor-principal'>
        <Logo />
        <Login />
      </div>
    </div>
  );
}

export default App;
