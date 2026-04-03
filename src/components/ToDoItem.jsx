function ToDoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
