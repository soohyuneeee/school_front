
"use client";
import { useState, forwardRef } from 'react';
import { useForm, Controller } from 'react-hook-form';

const TodoList = forwardRef((props, ref) => {
  const [todos, setTodos] = useState([]);
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    if (data.task.trim() !== '') {
      setTodos([...todos, { task: data.task, completed: false }]);
      reset();
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="task"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter a task"
              style={{ ...styles.input, color: 'black' }} // 글자 색상을 검은색으로 변경
              ref={ref}
            />
          )}
        />
        <button type="submit" style={styles.button}>Add</button>
      </form>
      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
              style={styles.checkbox}
            />
            {todo.task}
            <button onClick={() => removeTodo(index)} style={styles.removeButton}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    width: '70%',
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    marginLeft: '10px',
    cursor: 'pointer',
    backgroundColor: '#0074D9',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  checkbox: {
    marginRight: '10px',
  },
  removeButton: {
    padding: '4px 8px',
    fontSize: '14px',
    marginLeft: '10px',
    cursor: 'pointer',
    backgroundColor: '#FF4136',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

export default TodoList;
