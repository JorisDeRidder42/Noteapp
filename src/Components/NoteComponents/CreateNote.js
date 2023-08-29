import { React } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const CreateNote = ({textHandler, saveHandler, inputText}) => {
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;

  return (
    <>
        <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
        <textarea
            cols="10"
            rows="5"
            value={inputText}
            onChange={textHandler}
            placeholder="Type..."
            maxLength="100"
        />
            <div className="note-footer">
                <button className="note-save" onClick={saveHandler}>Save</button>
            </div>
            <ProgressBar now={charLeft} />
        </div>
    </>
  );
}
export default CreateNote;