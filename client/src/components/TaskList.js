/**
 * Dependencies
 */

import React, { useState } from 'react';
import Task from './Task';

/**
 * Define component
 */

function TaskList() {
  const [tasks, setTasks] = useState([
    {description: "List item 1"},
    {description: "List item 2"},
    {description: "List item 3"},
  ]);

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
