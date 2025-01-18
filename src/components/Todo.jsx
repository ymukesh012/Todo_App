import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";




const Todo = () => {

      
const [task,setTask] =useState('');  // State for the input value
const [tasks,setTasks] =useState([]);  // State for the list of tasks
const [dateTime,setDateTime] =useState('');  // State for the date




//Todo Date and Time
// setInterval(()=>{
//     const now =new Date(); // Get the current date and time
//     const formattedDate = now.toLocaleDateString();  // Get the current date
//     const formattedTime = now.toLocaleTimeString();  // Get the current time
    
//     setDateTime(`${formattedDate} ${formattedTime}`);  // Set the date and time
// },1000);


useEffect(()=>{
  const interval=setInterval(()=>{
    const now =new Date(); // Get the current date and time
    const formattedDate = now.toLocaleDateString();  // Get the current date
    const formattedTime = now.toLocaleTimeString();  // Get the current time
    
    setDateTime(`${formattedDate} ${formattedTime}`);  // Set the date and time
},1000);

return ()=>clearInterval(interval)

},[]);



const handleChange=(e)=>{
   setTask(e.target.value)
    // console.log(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault();
    
    if (task.trim()){ // task-Check if the input is not empty and trim- checks does not contain only spaces 
       
        if (tasks.includes(task)) {
            alert('Task already exists!');
            setTask('')   // Clear the input after unsuccessful submission
            return;
        }

        console.log(task)   // Add task to the list here
        setTasks([...tasks, task]);
        setTask('')   // Clear the input after successful submission
    }

        else {
             alert('Please add a task')
        }
     
      
    
}
    // Handle task completion
  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Handle task deletion  
  {/*The Correct Approach:
Goal: You want to delete a task at a particular index, which is provided as an argument to the handleDelete function.
Correct Logic: To remove the task at a given index, you need to filter out the task based on its index, not its value.*/}
  
const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); //when i am clicking delete button(index) then it returning the list except that list(index)
    setTasks(updatedTasks);
  };

  const handleAllDelete=()=>{
    setTasks([])
  }

  return (
    <section className='flex flex-col items-center w-full sm:w-[40rem] md:w-[40rem] lg:w-[40rem] h-auto m-auto mt-10  py-2 bg-slate-200 rounded-lg '>
        

     <header className='flex  flex-col items-center my-5 bg-cyan-600 p-2 w-full'>
       
      <h1 className='text-amber-50 font-bold text-[3rem] leading-tight'>Todo List</h1>
      <h2>{dateTime}</h2>
     </header>
    

    <section>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-1 sm:space-y-0 '>
        <div className='w-full sm:w-[350px] md:w-[350px] lg:w-[400px] xl:w-[450px]'>
          <input className='w-full h-12 border-solid border-2 border-sky-500 rounded-lg  text-left' 
          autoComplete='off'
          type='text' 
          placeholder='Add Task' 
          value={task}
            onChange={handleChange}
          /> 
       
        </div>
        
        <div className='w-full sm:w-auto'>
            <button className='bg-sky-500 p-3 w-full sm:w-[150px] rounded-lg text-white font-semibold' type='submit' >Add Task</button>
        </div>
      </form>

      <section className='mt-10'>
        <ul className='space-y-4'>
            {tasks.map((curTask, index) => {
                return(
<li key={index} className='flex justify-between items-center bg-slate-300 p-3 m-2 rounded-lg'>
    <span>{curTask}</span>


    <div className="flex space-x-2 ml-auto">
    <button className='text-green-600 hover:text-green-800 focus:outline-none  text-2xl' onClick={() => handleComplete(index)}><FaCircleCheck/></button>
    <button className='text-gray-600 hover:text-black focus:outline-none  text-3xl' onClick={() => handleDelete(index)}><MdDeleteForever /></button>

    </div>
</li>
                )

            })
            }
                
        </ul>
      </section>
    </section>

<button className='text-white bg-red-600 p-4 mt-2 rounded-lg' onClick={handleAllDelete}>CLEAR</button>
  
   </section>
  )
}

export default Todo