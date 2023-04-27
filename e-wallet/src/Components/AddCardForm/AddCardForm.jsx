import './AddCardForm.scss'
import bitcoin from '../../assets/Bitcoin.png'
import blockChain from '../../assets/Block-chain.png'
import evil from '../../assets/Evil.png'
import ninja from '../../assets/Ninja.png'
import chip from '../../assets/chip.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addCard } from '../../Actions/Actions'
import uuid from 'uuid-random'


function AddCardForm(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = uuid()


    const [vendor, setVendor] = useState(`bitcoin ${ bitcoin } #FFAE34 #FFFFFF ${chip}`);
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardHolder] = useState('');
    const [valid, setValidThru] = useState('');
    const [cvv, setCVV] = useState('');

    function GoBackButton() {
        const navigate = useNavigate();

        function handleClick() {
          navigate('/');
        }

        return (
          <button onClick={handleClick}>Go Back</button>
        );
      }

    function saveCardInfo() {
      const splitVendor = vendor.split(' ');
      if (cardNumber.length < 5 || cardNumber.length > 20) {
        alert('Fill in the application');
      } else {
        const formValue = {
          id: id,
          Vendor: splitVendor,
          cardNumber: cardNumber,
          cardName: cardName,
          valid: valid,
          cvv: cvv
        };
        dispatch(addCard(formValue));
        navigate('/');
      }
    };
  
    function getValue(event) {
      setVendor(event.target.value)
    };
  
    function getInputNumber(event) {
      setCardNumber(event.target.value) 
    }
  
    return (
        <div>
      <form className='form'>
        <label className='formLabel' htmlFor="">CARD NUMBER</label>
        <input
          className='form-Input'
          type="number"
          placeholder="XXXX XXXX XXXX XXXX"
          onChange={getInputNumber}
        />
        <label className='form-Label' htmlFor="">CARDHOLDER NAME</label> 
        <input
          className='form-Input'
          type="text"
          required
          placeholder="CARDHOLDER NAME"
          onChange={(event) => { setCardHolder(event.target.value); }}
        />

        <article className='formArt'>
          <article className='formDateCvv'>
            <label className='formValid' htmlFor="">VALID THRU</label>
            <input
              className='form-Input'
              type="number"
              required
              placeholder='01/23'
              onChange={(event) => { setValidThru(event.target.value); }}
            />
          </article>
          <article className='formDateCvv'>
            <label className='form-Label' htmlFor="CVV">CVV</label>
            <input
              className='form-Input'
              type="number"
              required
              placeholder='123'
              onChange={(event) => { setCVV(event.target.value); }}
            />
          </article>
        </article>
  
        <label className='form-Label' htmlFor="vendors">VENDOR</label>
        <select
          name="vendors"
          id=""
          onChange={getValue}
          className='form-Input'
          required
        >
          <option value={'NoVendor'}>Choose Vendor</option>
          <option value={`bitcoin ${bitcoin} #FFAE34 #FFFFFF ${chip}`}>BITCOIN INC</option>
          <option value={`ninja ${ninja} #222222 #FFFFFF ${chip}`}>NINJA BANK</option>
          <option value={`blockchain ${blockChain} #8B58F9 #FFFFFF ${chip}`}>BLOCKCHAIN INC</option>
          <option value={`evil ${evil} #F33355 #FFFFFF ${chip}`}>EVIL CORP</option>
        </select>
  
        <button
          type='submit'
          className='formBtn'
          disabled={!cardNumber || !cardName || !valid || !cvv || vendor === 'NoVendor'}
          onClick={saveCardInfo}
        >
          Add Card
        </button>
      </form>
      <GoBackButton />
      </div>
    );
  }
  
  export default AddCardForm;