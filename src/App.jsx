import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import Keeper from './components/Keeper';
import Quote from './components/Quote';
import Todo from './components/Todo';


  const App = () => {
    const [componentVisible, setComponentVisible] = useState();
    const showComponent = (component) => {
        setComponentVisible(component);
    };

    return (
        <div className="App">
            <Quote />
            <button className = "toggler" onClick={() => showComponent('Keeper')}>Keeper App</button>
            <button className = "toggler" onClick={() => showComponent('Todo')}>Todo List</button>

            {componentVisible === 'Keeper' && <Keeper />}
            {componentVisible === 'Todo' && <Todo />}
        </div>
    );
};
export default App;
