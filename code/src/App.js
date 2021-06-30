import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Header from './components/Header';
import todos from './reducers/todos';
import TodosList from './components/TodosList';
import TaskForm from './components/TaskForm';

const reducer= combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskForm />
      <TodosList />      
    </Provider>
  )
};
