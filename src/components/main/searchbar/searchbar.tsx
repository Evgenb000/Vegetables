import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import './searchbar.scss';
import { setSearchValue } from '../../../redux/slices/filterSlice';
import { AppDispatch } from '../../../redux/store';

const SearchBar: React.FC = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch<AppDispatch>();
  const changeValue = (value: string) => {
    setValue(value);
    changeSearchValue(value);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeSearchValue = React.useCallback(
    debounce((searchValue: string) => {
      dispatch(setSearchValue(searchValue));
    }, 300),
    [])

  return ( 
    <div className="input__container">     
      <input
        className='input'
        id="search"
        type="search"
        value={value}
        onChange={(event) => changeValue(event.target.value)}
        placeholder="Search..."
        autoFocus
        required
      />  
    </div>
  )
}

export default SearchBar;
