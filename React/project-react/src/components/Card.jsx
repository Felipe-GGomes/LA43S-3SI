function Card ({imagem, titulo, categoria, alt}){
    return (
        <article>
            <img src={imagem} alt={alt} />
            <button className="save-button">Salvar</button>
            <div>
                <div className="card-title">{titulo}</div>
                <div className="card-category">{categoria}</div>
            </div>
        </article>
    )
}

export default Card;