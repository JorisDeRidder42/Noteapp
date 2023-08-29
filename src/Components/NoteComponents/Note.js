import React from "react";
import { AiFillDelete } from "react-icons/ai";
const Note = ({id, text, deleteNote}) => {
  return (
    <div className="note">
      <div className="note-body">{text}</div>
      <div className="note-footer" style={{ justifyContent: "flex-end" }}>
        <AiFillDelete 
            className="note-delete" 
            onClick={() => deleteNote(id)}
            aria-hidden="true">
        </AiFillDelete>
      </div>
    </div>
  );
}
export default Note;