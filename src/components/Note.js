const Note = ({name, itens}) => {
    <article>
        <header>
            <h1>{name}</h1>
        </header>

        <section id="undone-items">
            <ul>
                {itens.map((item, i) => 
                    <li key={i}>{item.description}</li>)
                }
            </ul>
        </section>

        <section id="done-items">
            <ul>
                {itens.map((item, i) => 
                    <li key={i}>{item.description}</li>)
                }
            </ul>
        </section>

    </article>

}

export default Note