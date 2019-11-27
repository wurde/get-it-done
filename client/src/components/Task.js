/**
 * Dependencies
 */

import React, { useState } from 'react';

/**
 * Define styles
 */

const ListItemCSS = {
  cursor: 'pointer',
  padding: '5px 0px',
  fontSize: '1.3rem',
};

/**
 * Define component
 */

function Task(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const markCompleted = () => {
    setIsCompleted(!isCompleted);
    const updatedList = props.tasks.map(task => {
      if (task.description === props.description) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    props.setTasks(updatedList);
    localStorage.setItem('tasks', JSON.stringify(updatedList));
  }

  if (isCompleted) {
    return <li onClick={markCompleted} style={ListItemCSS}><strike>{props.description}</strike></li>
  } else {
    return <li onClick={markCompleted} style={ListItemCSS}>{props.description}</li>
  }
}

/**
 * Export component
 */

export default Task;
