import React  from 'react';
import '../stylesheets/NoteItem.css'

const NoteItem = ({status, description}) =>
    <li>
        <label>
            <input type="checkbox"/> 
            <span className="description">{description}</span>
        </label>
    </li>
export default NoteItem
