import I from './ICard'

const Card=({id, paragraph, details} :I) => {
    return(
        <div>
            <h1>Card {id}</h1>
            <p>{paragraph}</p>
            <details>{details}</details>
        </div>
    )
}

export default Card;