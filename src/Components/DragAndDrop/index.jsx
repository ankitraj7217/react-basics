import React, { useEffect, useState } from 'react';
import Notes from '../../Components/DragAndDrop/Notes/Notes.components';

const DragAndDrop = () => {
  const [notes, setNotes] = useState([
    {
      id: '1',
      detail: 'skfnjsfknskfnafk',
      x: 140,
      y: 140,
    },
    {
      id: '2',
      detail: 'skfnjsfknskfnafkzdvvvs',
      x: 280,
      y: 280,
    },
  ]);

  return (
    <section className="dad">
      <Notes notes={notes} setNotes={setNotes} />
    </section>
  );
};

export default DragAndDrop;
