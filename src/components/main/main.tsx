import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { InitialStateType, setFilters } from '../../redux/slices/filterSlice';
import { fetchedVegetables } from '../../redux/slices/vegetablesSlice';
import qs from 'qs';

import Card from './card/card';
import Sortby from './sortby/sortby';
import Searchbar from './searchbar/searchbar';

import './main.scss';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { AppDispatch, RootState } from '../../redux/store';

const Main: React.FC = () => {
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const totallyAmountProducts = useSelector((state: RootState) => state.product.totallyAmountProducts);
  const sortType = useSelector((state: RootState) => state.filter.sortType);
  const searchValue = useSelector((state: RootState) => state.filter.searchValue);

  const getVegetables = React.useCallback(async () => {
    const sortBy = `sortby=${sortType.replace('-', '')}`;
    const orderBy = sortType.includes('-') ? 'asc' : 'desc';
    const searchBy = searchValue ? `${searchValue}` : '';

    dispatch(fetchedVegetables({
      sortBy,
      orderBy,
      searchBy,
    })
    );
  }, [dispatch, searchValue, sortType])

  React.useEffect(() => {
    if (window.location.search) {
      const params: qs.ParsedQs = qs.parse(window.location.search.replace(/\?/, ''));
      const filterPayload: InitialStateType = {
        sortType: params.sortType as string,
        searchValue: params.searchValue as string,
      };
  
      dispatch(setFilters(filterPayload));
      isSearch.current = true;
    }
  }, [dispatch]);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    getVegetables();

    isSearch.current = false;
  }, [sortType, searchValue, dispatch, getVegetables])

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType,
        searchValue
      })
  
      navigate(`?${queryString}`)
    }

    isMounted.current = true;
  }, [sortType, searchValue, navigate])

  return ( 
    <div className="main">
      <div className="main__container container">
        <h1 className="main__title">
          Shop
        </h1>

        <p className="main__description">
          We will deliver any vegetables directly to your home
        </p>

        <Routes>
          <Route path='/' element={
            <Link to='/cart' onClick={() => dispatch(setSearchValue(''))}>
              <div className="main__cart">
                <div
                  className={totallyAmountProducts !== 0
                  ? 'main__cart__counter'
                  : ''}
                >
                  {totallyAmountProducts !== 0 ? totallyAmountProducts : ''}
                </div>
              </div>
            </Link>
          }/>
        </Routes>
        
        <Routes>
          <Route path='/' element={
            <div className="main__content--cards">
              <div className="main__categories">
                <Searchbar />

                <Sortby />
              </div>

              <div className="main__items">
                <Card />
              </div>
            </div>
          }/>
        </Routes>
      </div>
    </div>
  )
}

export default Main;
