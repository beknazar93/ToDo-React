import React from "react";
import DelitedImg from "../../image/delete- icon.png";
import CompletedImg from "../../image/complete-icon.png";
import redactor from "../../image/free-icon-edit-tools-9386099.png";
import Reset from '../../image/reset.png'
const Todo = ({todoArr, setTodoArr, status, setStatus }) => {
   

  const completedToDo = (id) => {
    setTodoArr(
      todoArr.map((item, idx) => {
        if (item.id === id) {
          return {
            ...item,
            isComplited: !item.isComplited,
            isActive: !item.isActive,
          };
        } else {
          return item;
        }
      })
    );
  };

  const deliteToDo = (id) => {
    setTodoArr(
      todoArr.map((item) => {
        if (item.id === id) {
          return {...item,isDelited: !item.isDelited };
        } else {
          return item;
        }
      })
    );
  };

  const importantToDo = (id) => {
    setTodoArr(
      todoArr.map((item) => {
        if (item.id === id) {
          return { ...item, isImportant: !item.isImportant };
        } else {
          return item;
        }
      })
    );
  };

 const changeTodo = (id)=>{
    setTodoArr(todoArr.map((item)=>{
        if(item.id === id){
            return{...item, isChange: !item.isChange}
        }else{
            return item
        }
    }))

 };

 const resetTodo = ()=>{

 }

const removeTodo = (id)=>{
  setTodoArr(todoArr.filter((item)=>{
    return item.id !== id
  }))
}

  return (
    <ul className="TodoList__menu">
      {todoArr
        .filter((item, idx) => {
          if (status === "active") {
            return !item.isComplited && !item.isDelited
          } else if (status === "completed") {
            return item.isComplited && !item.isDelited
          } else if (status === "important") {
            return item.isImportant === true;
          }else if(status === 'reset'){
            return item.isDelited

          }else {
            return item && !item.isDelited
          }
        })
        .map((item, idx) => {
          return (
            <li
              className={`TodoList__item ${
                item.isImportant ? "TodoList__item-important" : ""
              }`}
              key={item.id}
            >
              <div className="TodoList__left">
                <button
                  type="button"
                  onClick={(e) => {
                    completedToDo(item.id);
                  }}
                  className={`TodoList__btn ${
                    item.isComplited ? "TodoList__btn_active" : ""
                  }`}
                >
                  +
                </button>
                {item.isChange ? <textarea className="TodoList__textAria"  defaultValue={item.name} onChange={(e)=>{item.name = e.target.value}}/>
                :     <span
                className={`TodoList__text ${
                  item.isComplited ? "TodoList__text_active" : ""
                } ${item.isImportant ? "TodoList__text-important" : ""}`}
              >
                {item.name.length > 19
                  ? `${item.name.substr(0, 20)}...`
                  : item.name}{" "}
              </span>
                }
           
              </div>
              <div className="TodoList__right">

                {item.isChange ?  <button type="button" className="TodoList__btn-save" 
                onClick={()=>changeTodo(item.id)}>save</button> : '' }

                {status === 'reset'
                ? '' 
                :!item.isChange && status !== 'completed' 
                ? <button onClick={()=>changeTodo(item.id)} className="TodoList__btn_img-edit">
                <img
                  className="TodoList__img-edit"
                  src={redactor}
                  alt="redactor"
                />
                </button> :  ''}
               
               {status === 'reset' 
               ? ''
              :<button
                  type="button"
                  className={`TodoList__item_btn ${
                    item.isImportant ? "TodoList__item_btn-important" : ""
                  }`}
                  onClick={() => importantToDo(item.id)}
                >
                  {" "}
                  <img
                    className={`TodoList__img ${
                      item.isImportent ? "TodoList__img-important" : ""
                    }`}
                    src={CompletedImg}
                    alt="CompletedImg"
                  />
                  important
                </button>
                }
                
                <button className={`TodoList__func ${status === 'reset' ? 'TodoList__btn_reset': 'TodoList__btn_deleted'}`} type="button"
                  onClick={()=> resetTodo(item.id)} >
                  {status === 'reset' ? 
                   <button
                  onClick={() => deliteToDo(item.id)}
                  type="button"
                  className="TodoList__func"
                >
                  <img
                    className="TodoList__img"
                    src={Reset}
                    alt="reset"
                  />
                  reset
                </button>: <button
                  onClick={() => deliteToDo(item.id)}
                  type="button"
                  className="TodoList__func"
                >
                  <img
                    className="TodoList__img"
                    src={DelitedImg}
                    alt="DelitedImg"
                  />
                  delete
                </button>}
                </button>

                {status === 'reset' ? 
                <button
                  onClick={() => removeTodo(item.id)}
                  type="button"
                  className="TodoList__func"
                >
                  <img
                    className="TodoList__img"
                    src={DelitedImg}
                    alt="DelitedImg"
                  />
                  delete
                </button>
                : ''
                }

              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default Todo;
