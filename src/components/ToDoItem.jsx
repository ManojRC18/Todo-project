import { useState } from 'react';

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.todo.text);

  const handleSave = () => {
    if (editText.trim() === '') return;
    props.onEdit(props.todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(props.todo.text);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.onToggleComplete(props.todo.id)}
        className="checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className={`todo-text ${props.todo.completed ? 'completed' : ''}`}>
          {props.todo.text}
        </span>
      )}
      <div className="button-group">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="save-btn">
              Save
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => props.onDelete(props.todo.id)} className="delete-btn">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ToDoItem;
