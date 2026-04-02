import ToDoItem from './ToDoItem';

function ToDoList(props) {
  return (
    <div className="todo-list">
      {props.todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add one above!</p>
      ) : (
        props.todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onDelete={props.onDelete}
            onToggleComplete={props.onToggleComplete}
            onEdit={props.onEdit}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;
