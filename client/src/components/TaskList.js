/**
 * Dependencies
 */

import React, { useState } from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';

/**
 * Define styles
 */

const ListCSS = {
  listStyle: 'none',
};

/**
 * Define component
 */

function TaskList() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  return (
    <ul style={ListCSS}>
      {tasks.map((task,index) => <Task key={index} {...task} />)}
      <NewTaskForm tasks={tasks} setTasks={setTasks} />
    </ul>
  );
}

/**
 * Export component
 */

export default TaskList;
