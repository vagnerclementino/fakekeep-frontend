const NoteItemList = ({items}) => 
    <ul>
        {items.map((item, i) => 
            <li key={i}>{item.description}</li>)
        }
    </ul>
