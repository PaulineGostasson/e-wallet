import React from 'react';
import { useDispatch } from 'react-redux';
import { displayCard, putAwayCard, remove } from '../../Actions/Actions';
import chip from '../../assets/chip.svg';
import bitC from '../../assets/Bitcoin.png';
import './Card.scss';

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const decrease = () => {
    if (item?.id) {
      dispatch(remove(item.id, () => {
        dispatch(putAwayCard(item?.id));
      }));
    }
  };

  const selectedCard = () => {
    if (item?.cardNumber) {
      dispatch(displayCard(item));
    }
  };

  const cardVendor = item?.Vendor ?? [];
  const cardNumber = item?.cardNumber ?? 'XXXX XXXX XXXX XXXX';
  const cardName = item?.cardName ?? 'FIRSTNAME LASTNAME';
  const valid = item?.valid ?? 'MM/YY';
  const vendorColor = cardVendor[3] ?? 'black';
  const vendorBackground = cardVendor[2] ?? 'grey';

  return (
    <section
      onClick={selectedCard}
      className={`card ${cardVendor[0]}`}
      style={{ color: vendorColor, background: vendorBackground }}
    >
      <section className="card-Section">
        <article className="cardVendor">
          <img src={chip} alt="chip" />
          <img src={cardVendor[1] ?? bitC} alt="card logo" className="cardLogo" />
          <button className="cardRemove" onClick={decrease}>
            x
          </button>
        </article>
        <p className="cardNumber">{cardNumber}</p>
        <article className="cardInfo" style={{ color: vendorColor }}>
          <p>CARDHOLDER NAME</p>
          <p className="cardValid">VALID THRU</p>
        </article>
        <article className="cardInputField">
          <p className="cardName">{cardName}</p>
          <p className="cardValidDate">{valid}</p>
        </article>
      </section>
    </section>
  );
};

export default Card;