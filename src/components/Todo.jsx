import React, { useState } from "react";
import Todoform from "./Todoform";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getTodoLocalStorage, setTodoLocalStorage } from "./TodoLocalStorage";





const Todo = () => {
const [tasks, setTasks] = useState(()=> getTodoLocalStorage());
    


  //todo add to localStorage
  setTodoLocalStorage(tasks);


  const handleFormSubmit = (task) => {
    const { content } = task;

    // Check if the content is empty or just whitespace
    if (!content.trim()) {
      alert("Please enter a valid task.");
      return;
    }

    // Check if the task already exists based on its content
    if (tasks.some((t) => t.content === content.trim())) {
      alert("Task already exists!");
      return;
    }

    // Add the new task
    setTasks([...tasks, task]);
  };



  const handleDelete = (index) => {
    console.log(`Deleting task at index: ${index}`);
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index); // Remove the task at the given index
    setTasks(updatedTasks);
  };

  const handleAllDelete = () => {
    setTasks([]); // Clear all tasks
  };


  const handleComplete = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };
  

  return (
    <section className="flex flex-col items-center w-full sm:w-[40rem] md:w-[40rem] lg:w-[40rem] h-auto m-auto mt-10  py-2 bg-slate-200 rounded-lg ">
      <header className="flex flex-col items-center my-5 bg-cyan-600 p-2 w-full">
        <h1 className="text-amber-50 font-bold text-[3rem] leading-tight">
          Todo List
        </h1>
        <TodoDate />
      </header>

      <Todoform onAddTodo={handleFormSubmit} />

      <section className="mt-10">
        <ul className="space-y-4">
          {tasks.map((currTask, index) => (
            <TodoList
              key={index}
              index={index}
              data={currTask}
              onHandleDeleteTodo={handleDelete}
              onHandleCompleteTodo={handleComplete}
            />
          ))}
        </ul>
      </section>

      <button
        className="text-white bg-red-600 p-4 mt-2 rounded-lg"
        onClick={handleAllDelete}
      >
        CLEAR
      </button>
    </section>
  );
};

export default Todo;
