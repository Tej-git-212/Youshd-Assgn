import Home from "./components/homepage/Home";
import Login from "./components/Login/Login";
import { useContext } from 'react';
import { AuthContext } from './store/context';

function App() {

  const globalState = useContext(AuthContext);
  const { state, dispatch } = globalState;


  return (
    <div id="App">
      {!state.isLogin && <Login />}
      {state.isLogin && <Home />}
    </div>
  );
}

export default App;
