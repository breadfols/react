import React, { useState } from 'react';
import './TodoList.css'; // Импортируйте CSS файл

const rainbowColors = [
  '#ff0000', // Красный
  '#ff7f00', // Оранжевый
  '#ffff00', // Желтый
  '#00ff00', // Зеленый
  '#00ffff', // Голубой
  '#0000ff', // Синий
  '#4b0082', // Фиолетовый
];

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      completed: false,
      color: rainbowColors[todos.length % rainbowColors.length], // Присваиваем цвет
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2 className="gradient-text">Список дел</h2>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.color, // Применяем цвет к тексту
            }}
          >
            {todo.text}
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