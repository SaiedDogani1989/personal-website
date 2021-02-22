import React, { useState } from "react";
import TypeNote from "./TypeNote";
import CreateArea from "./CreateArea";
import "./style/typeNote.css"

function HoleApp() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
         <CreateArea onAdd={addNote} />
      <div className="row">
      {notes.map((noteItem, index) => {
        return (
          <TypeNote
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      </div>
    </div>
  );
}

export default HoleApp;
