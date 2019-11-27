/**
 * Dependencies
 */

import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from '@wurde/components';

/**
 * Define component
 */

function NewTaskForm(props) {
  const [task, setTask] = useState('');

  function addTask(e) {
    e.preventDefault();
    const updatedList = [...props.tasks, { description: task, isCompleted: false }];
    localStorage.setItem('tasks', JSON.stringify(updatedList));
    props.setTasks(updatedList);
    setTask('');
  }

  return (
    <Form id="new-task-form" action="post" onSubmit={addTask}>
      <FormGroup>
        <Input type="text" name="task" value={task} onChange={e => setTask(e.target.value)}></Input>
      </FormGroup>
      <Button type="submit">Add</Button>
    </Form>
  )
}

/**
 * Export component
 */

export default NewTaskForm;
