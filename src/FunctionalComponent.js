import React, { useState } from "react";
import TodoItem from "./TodoItem";

const FunctionalComponent = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // ADD TODOS
  const addTodo = (event) => {
    if (value) {
      const todoObj = { id: todos.length, value, edit: false };
      todos.push(todoObj);
      setTodos(todos);
      setValue("");
      console.log("initial", todos);
    } else {
      alert("Please Enter Some Text");
    }

    event.preventDefault();
  };
  //   DELETE TODOS
  const deleteTodoItem = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };
  // EDIT TODOS
  const editTodos = (item, index) => {
    setValue(item.value);
    setEdit(true);
    setCurrentItem(index);
  };

  //  UPDATE BUTTON
  const updateBtn = (index) => {
    const newTodos = [...todos];
    console.log(newTodos);
    newTodos[index].edit = true;
  };
  // UPDATE TODOS
  const update = (event) => {
    setEdit(false);
    todos.splice(currentItem, 1, { id: currentItem, value: value });
    setValue("");
    event.preventDefault();
  };

  return (
    <div>
      <div className="container">
        <div className="listContainer">
          <div className="headPossition">
            <br />
            <h1>ToDo App</h1>
            <br />
            <form>
              <input
                type="text"
                value={value}
                placeholder="Add a Items"
                onChange={handleChange}
              />

              {edit ? (
                <button
                  className="updateBtn"
                  onClick={(id, event) => update(id, event)}
                >
                  Update
                </button>
              ) : (
                <button onClick={(event) => addTodo(event)}>+</button>
              )}
            </form>
          </div>
          <ul>
            {todos.map((item, index) => {
              return (
                <TodoItem
                  key={item.id}
                  id={index}
                  item={item}
                  updateBtn={updateBtn}
                  deleteTodoItem={deleteTodoItem}
                  editTodos={() => {
                    editTodos(item, index);
                  }}
                  update={update}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FunctionalComponent;
