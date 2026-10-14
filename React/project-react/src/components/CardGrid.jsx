import Card from "./Card"
import cards from "../data/cards"
import './Card.css'

export function CardGrid(){
    return(
        <div className="grid">
            {cards.map((card, index)=>(
                <Card
                    key={index}
                    imagem={card.imagem}
                    titulo={card.titulo}
                    categoria={card.categoria}
                    alt={card.alt}
                />
            ))}
        </div>
    )
}