import React from "react";

const Header = (props) => (
  <header className="app-header">
    <h1 className="app-header__title">Super Sticky Notes</h1>
    <aside className="app-header__controls">
      {/*Use props to pass a reference to the addNote event handler method from 
App to the button element’s onClickevent listener <button onClick={props.addNote} className="add-new"> + New Note </button>*/}
      <button className="add-new" onClick={props.addNote}>
        + New Note
      </button>
      {/*Add an onChange event listener to the input and textbox.*/}
      <input
        type="text"
        //Use props to pass a reference to the onSearch method from App down to the
        //text input element’s onChange event listener.
        placeholder="Type here to search..."
        className="search"
        value={props.searchText}
        onChange={props.onSearch}
      />
    </aside>
  </header>
);

export default Header;
