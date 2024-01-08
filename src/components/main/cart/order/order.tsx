import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { clearProducts } from '../../../../redux/slices/productSlice';
import './order.scss';
import React from 'react';

type OrderType = {
  setActiveModal: (value: boolean) => void;
  activeModal: boolean;
}

const Order: React.FC<OrderType> = ({ setActiveModal, activeModal }) => {
  const dispatch = useDispatch();

  const onClickClose = () => {
    setActiveModal(false);
    dispatch(clearProducts());
  }

  if (!activeModal) {
    return <></>
  }

  return ( 
    <div className="order">     
      <div className="order__modal">
        <div className="order__content">
          Thank you for your order, we will deliver your vegetables soon.
          <br />
          Come again!
        </div>
        <Link to='/'>
          <div onClick={() => onClickClose()} className="order__close">
            OK
          </div>
        </Link>
      </div> 
    </div>
  )
}

export default Order;
