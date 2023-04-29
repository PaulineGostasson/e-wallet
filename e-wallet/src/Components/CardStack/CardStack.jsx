import { useSelector } from "react-redux"
import Card from "../Card/Card"
import './CardStack.scss'


function CardStack() {
    const myCards = useSelector((state) => { return state.cards })

    const cardsEl = myCards.map((item) => {
        return <Card item={item} key={item.id} />
    })

    return (
        <section className="cardStack">
            <section className="cardStack-cards" >
                {cardsEl.length > 0 ? cardsEl : <p className="cardStack-empty">Your Wallet is empty.</p>}
            </section>
        </section>
    )
}

export default CardStack