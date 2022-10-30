import React,{useState} from "react";

function CreateArea({onAdd}) {
  const [note,setNote]= useState({
    title:"",
    content:""
  })

function handleChange(e){
  const {name,value}= e.target;

  setNote(prevNote=>{
      return {...prevNote,[name]:value}
  })
}
function handleClick(e){
  e.preventDefault();
  onAdd(note);
  setNote({
    title:"",
    content:""
  })
  
}
  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" value={note.title}  onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
