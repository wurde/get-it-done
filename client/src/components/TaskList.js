/**
 * Dependencies
 */

import React, { useState } from 'react';
import Task from './Task';

/**
 * Define styles
 */

const ListCSS = {
  listStyle: 'none',
};

/**
 * Define component
 */

function TaskList(props) {
  return (
    <ul style={ListCSS}>
      {props.tasks.map((task, index) => (
        <Task key={index} index={index} {...task} tasks={props.tasks} setTasks={props.setTasks} />
      ))}
    </ul>
  );
}

/**
 * Export component
 */

export default TaskList;
