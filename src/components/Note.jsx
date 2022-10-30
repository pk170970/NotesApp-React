import React from "react";

function Note({onDelete,id,title,content}) {

  function handleDelete(){
    onDelete(id);
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
