import React  from 'react';
import Note from './Note'
// import '../stylesheets/NotePanel.css'

const NotePanel = ({notes}) => 
<article>
    <header>
        <h1>FakeKeep</h1>
    </header>
    <div className="notes-container">
        {notes.map((note,i) => 
          <section key={i} id={`${note.name.toLowerCase().replace(/ /g, "-")}-${note.id}`}>
            <Note key={note.id} {...note} />
          </section>
        )
        }
    </div>
</article>

export default NotePanel