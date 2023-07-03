import React from "react";
function Note(props) {
  // console.log(props.title);
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={(event) => {
        props.deleteElement(props.ind);
        // event.preventDefault();
      }}>DELETE</button>
    </div>
  );
}
export default Note;
