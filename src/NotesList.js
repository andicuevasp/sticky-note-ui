import React from "react";
import Note from "./Note.js";

const keepSearchMatches = (note) => note.doesMatchSearch;

const NotesList = (props) => {
  const renderNotes = (note) => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      removeNote={props.removeNote}
    />
  );
  const searchMatches = props.notes.filter(keepSearchMatches);
  const noteElements = searchMatches.map(renderNotes);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
