'use client'

import { useState } from "react";

export default function AppList() {
  const [newTitle, setTitle] = useState("")
  const [newDescription, setDescription] = useState("")
  const [allTodos,setTodos] = useState([])
  function handleAdd(){
    let toDoItem = {
      title: newTitle ,
      description: newDescription
    }

    let updateToDo = [...allTodos]
    updateToDo.push(toDoItem)
    setTodos(updateToDo)
  
  }

  function handleDelete(){
    let deleteToDo = [...allTodos]
    deleteToDo.pop()
    setTodos(deleteToDo)
  }

  return (
   <main className="flex justify-center items-center mt-20 ">
      <div className="add flex justify-center flex-col items-center gap-4 max-w-4xl">
        <div className="w-full flex justify-center flex-col md:flex-row gap-10 p-12 bg-blue-950 rounded-xl">
          <input placeholder="Titile To do" className="p-2" value={newTitle} onChange={(event) => setTitle(event.target.value)} required />
          <input placeholder="Description To do" className=" p-2"  value={newDescription} onChange={(event) => setDescription(event.target.value)} required/>
          <button onClick={handleAdd}>
            <img 
            src="/icons/mas.png"
            alt="añadir"
            />
          </button>
        </div>
        {allTodos.map((item, index) => {
            return(
              <div  key={index} className=' flex justify-between bg-blue-950 rounded-xl p-4 m-12 mt-2 mb-0 md:m-0 w-full'>
              <div className='text'>
              <h2 className='text-cyan-400 text-lg'>{item.title}</h2>
              <p className='text-white text-md'>{item.description}</p>
              </div>
              <div className='buttons flex gap-4 min-w-[80px]'>
              <button onClick={handleDelete}>
                <img 
                src="/icons/eliminar.png"
                alt="eliminar"
                className="w-fit"
                />
              </button>
              <button>
                <img 
                src="/icons/cheque.png"
                alt="completado"
                className="w-fit"
                />
              </button>
              </div>
            </div>
            )
        })}
       
      </div>
 
   </main>
  );
}
