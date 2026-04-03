function ToDoItem({ todo }) {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
    </div>
  );
}

export default ToDoItem;
