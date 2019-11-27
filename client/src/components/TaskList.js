/**
 * Dependencies
 */

import React, { useState } from 'react';

/**
 * Define component
 */

function TaskList() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      Tasks
    </div>
  );
}

/**
 * Export component
 */

export default TaskList;
