/**
 * Dependencies
 */

import React, { useState } from 'react';
import ClearButton from './components/ClearButton';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

/**
 * Define component
 */

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  return (
    <div>
      <header>
        <h1>Tasks</h1>
      </header>
      <main>
        <ClearButton tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <NewTaskForm tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}

/**
 * Export component
 */

export default App;
