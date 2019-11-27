/**
 * Dependencies
 */

import React from 'react';
import TaskList from './components/TaskList';

/**
 * Define component
 */

function App() {
  return (
    <div>
      <header>
        <h1>Tasks</h1>
      </header>
      <main>
        <TaskList></TaskList>
      </main>
    </div>
  );
}

/**
 * Export component
 */

export default App;
