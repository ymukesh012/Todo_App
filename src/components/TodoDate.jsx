import React from 'react'
import { useState,useEffect } from 'react';


const TodoDate = () => {
    
    const [dateTime, setDateTime] = useState(""); // State for the date

    //Todo Date and Time
  // setInterval(()=>{
  //     const now =new Date(); // Get the current date and time
  //     const formattedDate = now.toLocaleDateString();  // Get the current date
  //     const formattedTime = now.toLocaleTimeString();  // Get the current time

  //     setDateTime(`${formattedDate} ${formattedTime}`);  // Set the date and time
  // },1000);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date(); // Get the current date and time
      const formattedDate = now.toLocaleDateString(); // Get the current date
      const formattedTime = now.toLocaleTimeString(); // Get the current time

      setDateTime(`${formattedDate} ${formattedTime}`); // Set the date and time
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <h2>{dateTime}</h2>
  )
}

export default TodoDate