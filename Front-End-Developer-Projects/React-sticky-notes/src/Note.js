import React from "react";
//Use props to pass a reference to the onType method from App to each Note
//component.
const Note = (props) => {
  /*Add updateTitle and updateDescription functions to the Note component 
that are called by the event listeners added to the text input and textbox 
elements. These methods call the onType method passed down from App 
component as a prop, calling it with the Note’s id, either title or 
description for the updatedKey parameter, and the updatedValue which you 
will get by interrogating the change event from the text input or textbox 
element.*/
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  };
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };
  const clickDelete = () => props.remove(props.note.id);

  return (
    <li className="note">
      <input
        type="text"
        placeholder="Title"
        className="note__title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        placeholder="Description..."
        className="note__description"
        value={props.note.description}
        onChange={updateDescription}
      />
      <span onClick={clickDelete} className="note__delete">
        X
      </span>
    </li>
  );
};

export default Note;
