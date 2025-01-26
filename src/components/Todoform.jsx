import { useState } from "react";

const Todoform =({onAddTodo})=>{
    
  const [task, setTask] = useState({ id: "", content: "", checked: false }); // Initialize with default structure

     


    // const handleInputChange=(value)=>{
    //     setTask({id: value,content: value, checked: false})
    //      // console.log(e.target.value)
    //  }

    const handleInputChange = (value) => {
      setTask((prevTask) => ({
        ...prevTask, // Preserve other properties
        id: Date.now(), // Assign a unique ID for each task
        content: value, // Update the content
      }));
    };

  //  const handleFormSubmit=(e)=>{
  //       e.preventDefault();
  //       onAddTodo(task)
  //       setTask('')   // Clear the input after successful submission
  //  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if content is empty
    if (!task.content.trim()) {
      alert("Please enter a valid task!");
      return;
    }

    onAddTodo(task); // Pass the task object to the parent
    setTask({ id: "", content: "", checked: false }); // Reset the input
  };

    return(
<section>
      <form onSubmit={handleFormSubmit} className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-1 sm:space-y-0'>
        <div className='w-full sm:w-[350px] md:w-[350px] lg:w-[400px] xl:w-[450px]'>
          <input className='w-full h-12 border-solid border-2 border-sky-500 rounded-lg  text-left' 
          autoComplete='off'
          type='text' 
          placeholder='Add Task' 
          value={task.content}
          onChange={(event) => handleInputChange(event.target.value)}
          /> 
       
        </div>
        
        <div className='w-full sm:w-auto'>
            <button className='bg-sky-500 p-3 w-full sm:w-[150px] rounded-lg text-white font-semibold' type='submit' >Add Task</button>
        </div>
      </form>
      </section>
    )


}

export default Todoform;