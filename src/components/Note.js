import React  from 'react';
import NoteItemList from './NoteItemList'
import '../stylesheets/Note.css'

const Note = ({ name, items, edited_at}) =>
    <article>
        <header>
            <h1>{name}</h1>
        </header>

        <section id="todo-items">
            <NoteItemList items={items.filter(item => item.status === 'todo')} />
        </section>

        <section id="done-items">
            <h1>{`${items.filter(item => item.status === 'done').length} items done`}</h1>
            <NoteItemList items={items.filter(item => item.status === 'done')} />
        </section>

        <footer>
            Edited at  
            <time datatype={edited_at.toLocaleString()}> {edited_at.toLocaleString()}
            </time>
        </footer>
    </article>

Note.displayName = 'Note'

export default Note