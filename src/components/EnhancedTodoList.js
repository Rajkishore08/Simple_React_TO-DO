import React, { useState } from 'react';

const EnhancedTodoList = ({ userName }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newPriority, setNewPriority] = useState('medium');
  const [filter, setFilter] = useState('all');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { 
        id: Date.now(), 
        text: newTodo, 
        completed: false, 
        priority: newPriority 
      }]);
      setNewTodo('');
      setNewPriority('medium');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changePriority = (id, priority) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, priority } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <form onSubmit={addTodo} className="add-todo-form">
        <div className="input-group">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
          />
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            className="priority-select"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit" className="add-btn">Add Task</button>
        </div>
      </form>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      </div>
      <div className="todo-items">
        {filteredTodos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.priority}`}>
            <div className="todo-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            </div>
            <div className="todo-actions">
              <select
                value={todo.priority}
                onChange={(e) => changePriority(todo.id, e.target.value)}
                className="priority-select"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedTodoList;