import styles from './TodoCount.module.css';

export default function TodoCount({ todos }) {
  // toodos배열요소에서 don값이 true 인 요소갯수
  const doneCount = todos.filter((t) => {
    return t.done === true;
  }).length;

  return (
    <div className={styles.todo_count}>
      <p>
        완료: {doneCount} / 할 일: {todos.length}
      </p>
    </div>
  );
}
