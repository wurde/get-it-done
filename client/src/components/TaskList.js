/**
 * Dependencies
 */

import React, { useState } from 'react';
import Task from './Task';
import { List } from '@wurde/components';

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
    <List>
      {props.tasks.map((task, index) => (
        <Task key={index} index={index} {...task} tasks={props.tasks} setTasks={props.setTasks} />
      ))}
    </List>
  );
}

/**
 * Export component
 */

export default TaskList;
