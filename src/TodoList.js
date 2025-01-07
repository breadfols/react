import React from 'react';
import './TodoList.css';
import useStore from './store';

export const TodoList = () => {
  const { filter, addTodo, toggleTodo, deleteTodo, setFilter, filteredTodos } = useStore();

  const filteredTodosList = filteredTodos() || [];

  return (
    <div>
      <h2 className="gradient-text">Список дел</h2>
      <div>
        <button onClick={() => setFilter('all')} style={{ backgroundColor: filter === 'all' ? 'green' : 'slategray' }}>
          Все
        </button>
        <button onClick={() => setFilter('completed')} style={{ backgroundColor: filter === 'completed' ? 'green' : 'slategray' }}>
          Завершенные
        </button>
        <button onClick={() => setFilter('incomplete')} style={{ backgroundColor: filter === 'incomplete' ? 'green' : 'slategray' }}>
          Незавершенные
        </button>
      </div>
      <ul>
        {filteredTodosList.map((todo, index) => (
          <li
            key={todo.id}  // Assuming todo has a unique 'id'
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.color,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              paddingLeft: '20px',
              cursor: 'pointer',
            }}
          >
            <span style={{ position: 'absolute', left: '0' }}>•</span>
            <span>{todo.text}</span>
            <span style={{ textDecoration: 'none' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  deleteTodo(index);
                }}
                style={{
                  marginLeft: '10px',
                  backgroundColor: 'crimson',
                  color: 'black',
                  border: 'none',
                  padding: '8px 10px',
                  cursor: 'pointer',
                }}
              >
                Удалить
              </button>
            </span>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        const todoText = e.target.elements.todo.value;
        addTodo(todoText);
        e.target.reset();
      }}>
        <input type="text" name="todo" placeholder="Добавить дело" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};
