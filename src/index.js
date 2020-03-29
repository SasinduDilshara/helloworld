// import './styles.css';

import React, { memo, useState } from 'react';
import ReactDOM from 'react-dom';

import { useInputValue, useTodos } from './custom_hooks';

import Layout from './components/Layout';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';



// const forceUpdate = useForceUpdate();

const TodoApp = memo(props => {
    const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
    const { todos, addTodo, checkTodo, removeTodo, markComplete, findText, edit } = useTodos();


    const update = (idx) => {
        var text = findText(idx);
        var newtest = prompt("Upadte");
        edit(newtest, idx);
    }

    const oncomplete = (idx) => {
        markComplete(idx);
    }

    const clearInputAndAddTodo = _ => {
        clearInput();
        addTodo(inputValue);
    };

    return (
        <Layout>
            <AddTodo
                inputValue={inputValue}
                onInputChange={changeInput}
                onButtonClick={clearInputAndAddTodo}
                onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
            />
            <TodoList
                items={todos}
                onupdate={idx => update(idx)}
                onItemCheck={idx => checkTodo(idx)}
                onItemRemove={idx => removeTodo(idx)}
                oncomplete={idx => oncomplete(idx)}
            />
        </Layout>
    );
});

ReactDOM.render(<TodoApp />, document.getElementById('root'));