import React from 'react'


const todoKey ="reactTodo";

export const getTodoLocalStorage = () => {


        const storedTasks = localStorage.getItem(todoKey);
        if(!storedTasks) return [];  // Return an empty array if no data is found
        return JSON.parse(storedTasks);
    
    }
     
  
   
  



export const setTodoLocalStorage = (tasks) => {
  
  return localStorage.setItem(todoKey,JSON.stringify(tasks));
  
}




