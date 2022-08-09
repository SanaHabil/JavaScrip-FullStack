import React from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/ToDoList';
function App() {
  return (
    <div className="App">
      <header>
        <h1> Sana's To Do List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
  };

export default App;