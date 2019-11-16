import React  from 'react';
import Note from './Note'

const NotePanel = ({notes}) => 
<article>
    <header>
        <h1>FakeKeep</h1>
    </header>
    <div className="notes">
        {notes.map((note, i) => 
          <section id={`${note.name.toLowerCase().replace(/ /g, "-")}-${note.id}`}>
            <Note key={note.id} {...note} />
          </section>
        )
        }
    </div>
</article>

export default NotePanel