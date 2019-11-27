/**
 * Dependencies
 */

import React, { useState } from 'react';
import Task from './Task';

/**
 * Define component
 */

function TaskList() {
  const [tasks, setTasks] = useState([{description: "Check the box"}]);

  return (
    <ul>
      {tasks.map((task,index) => <Task key={index} {...task} />)}
    </ul>
  );
}

/**
 * Export component
 */

export default TaskList;
