import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({index,data,onHandleDeleteTodo,onHandleCompleteTodo}) => {
  return (
    <li className="flex justify-between items-center bg-slate-300 p-3 m-2 rounded-lg" >
         
         <span
        className={`${
          data.checked
            ? "line-through text-red-500"
            : "text-black"
        }`}
      >
        {data.content}
      </span>


    <div className="flex space-x-2 ml-[20rem]">
      <button
        className="text-green-600 hover:text-green-800 focus:outline-none  text-2xl"
        onClick={() => onHandleCompleteTodo(index)} 
      >
        <FaCircleCheck />
      </button>
      <button
        className="text-gray-600 hover:text-black focus:outline-none  text-3xl"
        onClick={() => onHandleDeleteTodo(index)}
      >
        <MdDeleteForever/>
      </button>
    </div>
  </li>
  )
}

export default TodoList


