/**
 * Dependencies
 */

import React from 'react';

/**
 * Define styles
 */

const ButtonCSS = {
  cursor: 'pointer',
  padding: '5px',
};

/**
 * Define component
 */

function ClearButton(props) {
  const clearCompleted = () => {
    const updatedList = props.tasks.filter(task => !task.isCompleted);
    localStorage.setItem('tasks', JSON.stringify(updatedList));
    props.setTasks(updatedList);
  };

  return <button onClick={clearCompleted} style={ButtonCSS}>Clear</button>
}

/**
 * Export component
 */

export default ClearButton;
