import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import EnhancedTodoList from './components/EnhancedTodoList';

function App() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="app-container">
      <h1>Personal Dashboard</h1>
      <div className="tab-buttons">
        <button 
          className={activeTab === 'profile' ? 'active' : ''} 
          onClick={() => setActiveTab('profile')}
        >
          User Profile
        </button>
        <button 
          className={activeTab === 'todos' ? 'active' : ''} 
          onClick={() => setActiveTab('todos')}
        >
          To-Do List
        </button>
      </div>
      {activeTab === 'profile' ? <UserProfile /> : <EnhancedTodoList />}
    </div>
  );
}

export default App;
