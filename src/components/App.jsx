import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]= useState([]);

  function addItems(note){
    setNotes((prevItems)=>{
      return [...prevItems,note]
    })
  }

  function deleteItems(id){
    setNotes((prevElement)=>{
     return prevElement.filter((item,index)=>{
        return index !== id
      })
    })
  }

  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItems}/>
      {notes.map((item,index)=>{
        return (
          <Note key={index} id={index} title={item.title} content={item.content} onDelete= {deleteItems} />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
