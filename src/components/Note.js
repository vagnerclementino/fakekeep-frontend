import NoteItemList from './components/NoteItemList'

const Note = ({ name, items }) => {
    <article>
        <header>
            <h1>{name}</h1>
        </header>

        <section id="undone-items">
            <NoteItemList items={items.filter(item => item.status === 'undone')} />
        </section>

        <section id="done-items">
            <NoteItemList items={items.filter(item => item.status === 'done')} />
        </section>

    </article>

}

export default Note