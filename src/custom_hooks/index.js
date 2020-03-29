import { useState } from 'react';

export const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(''),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }

      return false;
    },
  };
};

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: text => {
      if (text !== '') {
        setTodos(
          todos.concat({
            text,
            checked: false,
            created: new Date(),
            lastModified: new Date(),
            completed: false
          })
        );
      }
    },
    checkTodo: idx => {
      setTodos(
        todos.map((todo, index) => {
          if (idx === index) {
            todo.checked = !todo.checked;
          }

          return todo;
        })
      );
    },
    markComplete: idx => {
      var todo = todos.filter((todo, index) => idx == index);
      var text = todo[0].text;
      var created = todo[0].created;
      var completed = todo[0].completed;
      console.log("text", text)
      // text.style.textDecoration = "line-through"
      todo = {
        ...todo,
        text: text,
        checked: false,
        created: created,
        completed: !completed,
        lastModified: new Date()
      }
      var worldString = 'Hello, world';

      console.log(worldString.blink()); // <blink>Hello, world</blink> 
      console.log(worldString.bold()); // <b>Hello, world</b> 
      console.log(worldString.italics()); // <i>Hello, world</i> 
      console.log(worldString.strike());
      // console.log(todo);

      var nt = todos.filter((todo, index) => idx !== index)
      console.log('filterobj', todos)
      console.log('list-prev', nt)
      // nt = { ...nt, todo };
      nt.push(todo);
      console.log('final list', nt)
      setTodos(
        nt
      );
    },
    removeTodo: idx => {
      setTodos(todos.filter((todo, index) => idx !== index));
    },
    findText: idx => {
      var todo = todos.filter((todo, index) => idx == index);
      return todo[0].text;
    },
    edit: (text, idx) => {
      if (text !== '') {
        var todo = todos.filter((todo, index) => idx == index);
        todo = {
          ...todo,
          text: text,
          checked: false,
          lastModified: new Date(),
          completed: todo[0].completed
        }
        // console.log(todo);

        var nt = todos.filter((todo, index) => idx !== index)
        // console.log('filterobj', todos)
        // console.log('list-prev', nt)
        // nt = { ...nt, todo };
        nt.push(todo);
        // console.log('final list', nt)
        setTodos(
          nt
        );
      }

    },

  }
};
