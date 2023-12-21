import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TodoCount from './components/TodoCount';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.app}>
      <h1>Todo List</h1>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
