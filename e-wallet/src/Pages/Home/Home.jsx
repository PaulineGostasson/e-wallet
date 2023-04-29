import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import CardStack from "../../Components/CardStack/CardStack"
import Card from "../../Components/Card/Card"
import './Home.scss'
import { putAwayCard } from "../../Actions/Actions";
import React from 'react';


function Home() {
    const navigate = useNavigate()
    const showCard = useSelector((state) => state.ShowCard);
    const dispatch = useDispatch();

    function handlePutAway() {
        dispatch(putAwayCard());
    }

    return (
        <section className="home">
            <h1 className="home-title">E-Wallet</h1>
            <h4 className="home-text">Active Card</h4>
            <section className="home-showCard">
                {showCard && showCard.hasOwnProperty("Vendor") ? (
                    <div>
                        <Card item={showCard} />
                        <button className="homePutAway" onClick={handlePutAway}>
                            Put Away
                        </button>
                    </div>
                ) : (
                    <p className="home-noCard">Click on card to show card</p>
                )}
            </section>
            <section className="home-cardStack">
                <CardStack />
            </section>
            <button className="homeBtn" onClick={() => navigate("/addCard")}>
                ADD A NEW CARD
            </button>
        </section>
    );
}

export default Home