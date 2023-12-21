import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className={styles.todo_list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}
