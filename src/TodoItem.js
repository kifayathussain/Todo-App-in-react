import React from "react";


const TodoItem = ({item, deleteTodoItem ,id,editTodos,update,updateBtn}) => {
  return (
    <>
      <div className="liContainer">
        <i
          className="fa fa-times"
          onClick={() => deleteTodoItem(id)}
        ></i>
        <li>
          {item.value}
          <button
            className="editBtn"
            onClick={function() {editTodos(id,item) ; updateBtn(id) }}
          >
            Edit
          </button>
        </li>
      </div> 
    </>
  );
};

export default TodoItem;
