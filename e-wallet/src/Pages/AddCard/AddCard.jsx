import './AddCard.scss'
import AddCardForm from "../../Components/AddCardForm/AddCardForm"
import Card from "../../Components/Card/Card"

function AddCard(){

    return(
        <section className="addCard">
            <h1 className='addCard-title'>Add a new bank card</h1>
            <h4 className='addCard-text'>New Card</h4>
            <article className='addCard-card'>
                <Card/>
            </article>
            <article className='addCard-form'>
              <AddCardForm/>
            </article>
        </section>
    )
}
export default AddCard