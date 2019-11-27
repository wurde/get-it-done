/**
 * Dependencies
 */

import React, { useState } from 'react';
import ClearButton from './components/ClearButton';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import {
  Container,
  Row,
  Column,
  Header,
  Heading
} from '@wurde/components';

/**
 * Define component
 */

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  return (
    <Container>
      <Row>
        <Column>
          <Header>
            <Heading type="h1">Tasks</Heading>
          </Header>
          <main>
            <Row>
              <Column>
                <ClearButton tasks={tasks} setTasks={setTasks} />
              </Column>
            </Row>
            <Row>
              <Column>
                <TaskList tasks={tasks} setTasks={setTasks} />
              </Column>
            </Row>
            <Row>
              <Column>
                <NewTaskForm tasks={tasks} setTasks={setTasks} />
              </Column>
            </Row>
          </main>
        </Column>
      </Row>
    </Container>
  );
}

/**
 * Export component
 */

export default App;
