/**
 * Dependencies
 */

import React from 'react';
import { Button } from '@wurde/components';

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

  return <Button type="secondary" onClick={clearCompleted} style={ButtonCSS}>Clear</Button>
}

/**
 * Export component
 */

export default ClearButton;
