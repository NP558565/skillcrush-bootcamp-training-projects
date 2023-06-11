import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  //Then, update state for the App component with placeholder data:
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: "search for me"
  };
  //Define an addNote method in App that will add a new object to the notes
  //array in the App state
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };
  /*In the App component, define an onType event handler method that copies 
the array of notes currently in state, keeping all note objects the same 
except for the object matching the id of the note that the user typed in. 
The object with the matching id should be copied, updating the string value 
of the edited property.*/
  onType = (editMeId, updatedKey, updatedValue) => {
    /* this event handler updates the sticky note text fields
        - editMeId: the id of the note that the user typed in
        - updatedKey: was the title or description edited?
        - updatedValue: the new value of the edited field*/

    const updateIdMatch = (note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    };
    const updatedNotes = this.state.notes.map(updateIdMatch);
    this.setState({ notes: updatedNotes });
  };
  //In the App component, define an onSearch method that maps over the notes
  //array and for each note object.
  onSearch = (e) => {
    //Check to see if the title or the description text includes a match for
    //the text that the user typed into the search field.
    const searchText = e.target.value.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!searchText) {
        /*Set the note object’s doesMatchSearch property to true if there is 
matching text and false if not. Hint: the following two string methods 
can be very helpful in writing this event handler:
.toLowerCase()(opens in a new tab) string method(opens in a new tab) which 
makes all text lowercase.
.includes()(opens in a new tab) string method(opens in a new tab), which 
will search a string or group of strings for matching text.*/
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(searchText);
        const descriptionMatch = description.includes(searchText);
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        return note;
      }
    });
    this.setState({
      searchText: searchText,
      notes: updatedNotes
    });
  };
  /*Add delete functionality to the UI. To add this functionality, think 
about how the data needs to be updated.Add an event handler based on 
the action the user will take to delete their note.*/
  remove = (deleteMeId) => {
    const notIdMatch = (note) => note.id !== deleteMeId;
    const updatedNotes = this.state.notes.filter(notIdMatch);
    this.setState({ notes: updatedNotes });
  };

  componentDidUpdate() {
    const stringifiedNotes = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", stringifiedNotes);
  }
  /*add save functionality to the UI. To do this, think about what 
data needs to be saved to the browser’s localStorage, and when in 
the components’ lifecycles we should write to and read from 
localStorage. Hint:Use your lifecycle methods knowledge here!*/
  componentDidMount() {
    const stringifiedNotes = localStorage.getItem("savedNotes");
    if (stringifiedNotes) {
      const savedNotes = JSON.parse(stringifiedNotes);
      this.setState({ notes: savedNotes });
    }
  }

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
          remove={this.remove}
        />
      </div>
    );
  }
}

export default App;
