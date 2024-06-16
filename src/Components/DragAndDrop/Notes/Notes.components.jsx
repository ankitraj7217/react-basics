import React, { useEffect, useRef, createRef } from 'react';

const Notes = ({ notes, setNotes }) => {
  const notesRef = useRef([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

    const updatedNotes = notes.map((note) => {
      const isNoteAvailable = savedNotes.find((curr) => curr.id === note.id);
      if (isNoteAvailable) {
        return note;
      }

      const randomProp = calculateRandomPos();
      return {
        id: note.id,
        detail: note.detail,
        x: randomProp.x,
        y: randomProp.y,
      };
    });

    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }, [notes.length]);

  const calculateRandomPos = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const handleDragStart = (e, id) => {
    const currNote = notes.find((curr) => curr.id === id);
    const noteRef = notesRef.current[id].current;
    const rect = noteRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    console.log('e.clientX: ', e.clientX);

    const handleMouseMove = (e1) => {
      const newX = e1.clientX - offsetX;
      const newY = e1.clientY - offsetY;

      noteRef.style.left = newX + 'px';
      noteRef.style.top = newY + 'px'; // updates dynamically
    };

    const handleMouseUp = (e2) => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      // check for overlap with other.

      console.log(noteRef);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <section className="notes">
      {notes.map((note) => {
        return (
          <p
            key={note.id}
            className="note-div"
            style={{
              position: 'absolute',
              left: note.x,
              top: note.y,
              border: '1px solid black',
              userSelect: 'none',
              padding: '10px',
              width: '200px',
              height: '200px',
              cursor: 'move',
              backgroundColor: 'lightyellow',
              color: 'black',
            }}
            ref={
              notesRef.current[note.id]
                ? notesRef.current[note.id]
                : (notesRef.current[note.id] = createRef())
            }
            onMouseDown={(e) => handleDragStart(e, note.id)}
          >
            {note.detail}
          </p>
        );
      })}
    </section>
  );
};

export default Notes;
