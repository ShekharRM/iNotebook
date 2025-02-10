import React from 'react'
import NoteContext from '../Context/notes/NoteContext';
import { useContext } from 'react';
import { useState } from 'react';

function AddNote(props) {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("added successfully","success")
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div className="addnote-container">
        <h2>Add a Note</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} placeholder="Enter note title..." required />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" name="description" value={note.description} onChange={onChange} placeholder="Enter note description..." rows="3" required></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} placeholder="Enter a tag (optional)..." />
            </div>
            <button type="submit" className="btn-add" onClick={handleClick} disabled={note.title.length < 3 || note.description.length < 5}>
                Add Note
            </button>
        </form>
    </div>
);
};

export default AddNote;
