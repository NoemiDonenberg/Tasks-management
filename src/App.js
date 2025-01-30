import logo from './logo.svg';
import './App.css';
import TaskList from './components/TasksList';
import { initializeApp } from 'firebase/app';


function App() {
  const app = initializeApp(firebaseConfig);
  return (
    <div>
      <TaskList></TaskList>
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
