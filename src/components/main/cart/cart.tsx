import React from 'react';
import Order from './order/order';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { incrementProducts, decrementAmountProducts } from '../../../redux/slices/productSlice';
import { AppDispatch, RootState } from '../../../redux/store';

import './cart.scss';
import neutralFaceImg from '../../../assets/images/neutral-face-slime.png';

const Cart: React.FC = () => {
  const [activeModal, setActiveModal] = React.useState(false);
  const totallyAmountProducts = useSelector((state: RootState) => state.product.totallyAmountProducts);
  const counterProducts = useSelector((state: RootState) => state.product.counterProducts);
  const vegetables = useSelector((state: RootState) => state.vegetables.items);
  const dispatch = useDispatch<AppDispatch>();

  let totallyPrice = 0;
  const noProductChoicen = (
    <div className="cart__no-product">
      <h2>Cart is empty. Make your choise.</h2>
      <img className='cart__no-product__img' src={neutralFaceImg} alt="Neutral face..." />
    </div>
  )

  return (
    <div className="cart">

      {totallyAmountProducts === 0 ? ''
      : <>
        <h4 className="cart__title">Yours order</h4>
        <div className="cart__description">
          <div className="cart__description--img">Icon</div>
          <div className="cart__description--name">Name</div>
          <div className="cart__description--category">Category</div>
          <div className="cart__description--amount">Amount</div>
          <div className="cart__description--price">Price</div>
        </div>
      </>}

      {totallyAmountProducts === 0
        ? noProductChoicen
        : vegetables.map(({ ...vegetables}) => {
          return (
            <div key={vegetables.id} className={counterProducts[vegetables.id] !== 0 ? 'cart__table' : 'cart__table--none'}>
              <div className='cart__item'>
                <img
                  className='cart__img'
                  src={counterProducts[vegetables.id] !== 0 ? vegetables.image : ''}
                  alt="" />
              </div>

              <div className="cart__name cart__item">
                {counterProducts[vegetables.id] !== 0 ? vegetables.title : ''}
              </div>

              <div className="cart__category cart__item">
                {counterProducts[vegetables.id] !== 0 ? vegetables.category
                  .map((category) => category + ' ') : ''}
              </div>

              <div className="cart__amount cart__item">
                {counterProducts[vegetables.id] !== 0 
                  ? <>
                      <button
                        onClick={() => dispatch(decrementAmountProducts(vegetables.id))}
                        className="cart__amount--minus button"
                      >
                        -
                      </button>

                      {counterProducts[vegetables.id]}

                      <button
                        onClick={() => dispatch(incrementProducts(vegetables.id))}
                        className="cart__amount--plus button"
                      >
                        +
                      </button>
                    </> 
                  : ''
                }
              </div>
              
              <div className="cart__price cart__item">
                {counterProducts[vegetables.id] !== 0 ? vegetables.price
                  * counterProducts[vegetables.id] + '$' : ''}

                <p hidden>
                  {totallyPrice += (vegetables.price * counterProducts[vegetables.id])}
                </p>
              </div>
            </div>  
          )}
        )}

      {totallyAmountProducts === 0 
        ? <>
          <button className='button'>
            <Link to='/'>Continue shopping</Link>
          </button>
        </>
        : <>
          <button onClick={() => setActiveModal(true)} className="cart__button button">
            Totally pricce: {totallyPrice}$
            <br />
            Buy
          </button>
        </>}

        <Order setActiveModal={setActiveModal} activeModal={activeModal} />
    </div> 
  )
}

export default Cart;
