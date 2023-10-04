import PropTypes from "prop-types";
import { useState } from "react";

export const Todos = ({
  listOfTodos,
  markTodoAsDone,
  deleteTodo,
  editTodo,
}) => {
  const [editingTodo, setEditingTodo] = useState(null);

  //* zapocnuvanje na izmenata
  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  //* zacuvuvanje na izmenata
  const handleSave = () => {
    if (editingTodo) {
      editTodo(editingTodo.id, editingTodo.text);
      setEditingTodo(null);
    }
  };

  //* otkazuvanje na izmenata
  const handleCancel = () => {
    setEditingTodo(null);
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listOfTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>
                {editingTodo && editingTodo.id === todo.id ? (
                  <input
                    type="text"
                    value={editingTodo.text}
                    onChange={(e) =>
                      setEditingTodo({
                        ...editingTodo,
                        text: e.target.value,
                      })
                    }
                  />
                ) : (
                  todo.text
                )}
              </td>
              <td>
                <input
                  type="checkbox"
                  value={todo.done}
                  checked={todo.done}
                  onChange={() => markTodoAsDone(todo)}
                />
              </td>
              <td>
                {editingTodo && editingTodo.id === todo.id ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(todo)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Todos.propTypes = {
  listOfTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
  markTodoAsDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
