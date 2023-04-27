import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CardStack from "../../Components/CardStack/CardStack"
import Card from "../../Components/Card/Card"
import'./Home.scss'



function Home (){
    const navigate = useNavigate()

    const showCard = useSelector((state) => { return state.ShowCard})
    console.log(showCard)


    function navigateToForm(){
        navigate('/addCard')
    }
    return(
        <section className="home">
            <h1 className="home-title">E-Wallet</h1>
            <h4 className="home-text">Active Card</h4>
            <section className="home-showCard">
              { showCard && showCard.hasOwnProperty('Vendor')? <Card item={ showCard }/> : <p className="home-noCard">Click on card to show card</p> }
            </section>
            <button className="homeBtn" onClick={ navigateToForm } >ADD A NEW CARD</button>
            <section className="home-cardStack">
                <CardStack/>
            </section>
        </section>

    )
}
export default Home
