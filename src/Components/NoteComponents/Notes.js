import Note from "./Note"
import { React, useState, useEffect } from "react";
import "../css/Notes.css";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";


const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");

    //get text
    const textHandler = (e) => {
        setInputText(e.target.value);
    }
    // save note
    const saveHandler = (e) => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: inputText 
            },
        ])
        setInputText('')
    };

    //delete note
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
      };

    return(
        <div className="notes">
             {notes.map((note) => (
                <Note 
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    deleteNote={deleteNote}
                />
             ))}
            <CreateNote  textHandler={textHandler} saveHandler={saveHandler} inputText={inputText}/>
        </div>
    )
}
export default Notes;