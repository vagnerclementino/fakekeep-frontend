import React  from 'react';
import NoteItem from './NoteItem';
import '../stylesheets/NoteItemList.css'

const NoteItemList = ({items}) => 
    <ul>
        {items.map((item, i) => <NoteItem key={i} {...item} />)}
    </ul>

NoteItemList.displayName = 'NoteItemList'

export default NoteItemList