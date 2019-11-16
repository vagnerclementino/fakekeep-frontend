import React  from 'react';

const NoteItemList = ({items}) => 
    <ul>
        {items.map((item, i) => <li key={i}>{item.description}</li>)}
    </ul>

NoteItemList.displayName = 'NoteItemList'

export default NoteItemList