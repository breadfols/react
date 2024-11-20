import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Text">Welcome back</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2 className="Text">HELLO WORLD</h2>
          <TodoList/>
        </p>
      </header>
    </div>
  );
}

export default App;
