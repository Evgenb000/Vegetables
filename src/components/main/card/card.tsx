import Skeleton from './skeleton';
import { useSelector, useDispatch } from 'react-redux'
import { incrementProducts } from '../../../redux/slices/productSlice';
import { AppDispatch, RootState } from '../../../redux/store';

import './card.scss';
import iconOops from '../../../assets/images/icon-oops.png'
import { Status } from '../../../redux/slices/vegetablesSlice';

const Card: React.FC = () => {
  const counterProducts = useSelector((state: RootState) => state.product.counterProducts);
  const status = useSelector((state: RootState) => state.vegetables.status);
  const vegetables = useSelector((state: RootState) => state.vegetables.items);
  const dispatch = useDispatch<AppDispatch>();

  const card = status !== Status.COMPLETE 
    ? [ ...new Array(8)].map ((_, id) => <Skeleton key={id} />)
    : vegetables.map(({ ...vegetables}, id: number) => {
      const titleUC = (vegetables.title.charAt(0).toUpperCase() + vegetables.title.slice(1));

      return (
        <div className="card" key={id}>
          <div className="card__item">
            <h3 className="card__title">{titleUC}</h3>

            <div className="card__img">
              <img src={vegetables.image} alt={titleUC} />
            </div>
          </div>

          <div className="card__description">
            <div className="card__price">{vegetables.price}$ per 1kg</div>

            <div onClick={() => dispatch(incrementProducts(vegetables.id))} className="card__buy">
              Buy
              
              <div className={counterProducts[vegetables.id] !== 0 ? 'card__buy__counter' : ''}>
                {counterProducts[vegetables.id] !== 0 ? counterProducts[vegetables.id] : ''}
              </div>
            </div>
          </div>
        </div>
      );
    });

  const errorSection = 
    <div className="card__error">
      <img src={iconOops} alt="Oops..." />

      <div className="card__error__text">
        Oops... nothing found, try another query
      </div>
    </div>

  if (status === Status.ERROR) {
    return errorSection;
  }

  return <div className="card__grid">{card}</div>
}

export default Card;
