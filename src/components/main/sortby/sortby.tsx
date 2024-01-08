import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortType } from '../../../redux/slices/filterSlice';
import './sortby.scss';
import { AppDispatch } from '../../../redux/store';

type listType = {
  name: string;
  sortProperty: string;
}

const Sortby: React.FC = () => {
  const sortRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const list: listType[] = [
    {name: 'Price DESC', sortProperty: 'price'},
    {name: 'Price ACS', sortProperty: '-price'},
    {name: 'Rating DESC', sortProperty: 'rating'},
    {name: 'Rating ACS', sortProperty: '-rating'},
    {name: 'Name DESC', sortProperty: '-title'},
    {name: 'Name ACS', sortProperty: 'title'}
  ]

  const onClickSelected = (i: number, property: string) => {
    setSelected(i);
    setOpen(false);
    dispatch(setSortType(property));
  }

  React.useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      const path = event.composedPath && event.composedPath();
      const isClickInside = path && path.includes && sortRef.current && path.includes(sortRef.current);
  
      if (!isClickInside) {
        setOpen(false);
      }
    };
  
    if (sortRef.current) {
      document.body.addEventListener('click', clickOutside);
  
      return () => {
        document.body.removeEventListener('click', clickOutside);
      };
    }
  
    return () => {};
  }, []);

  return ( 
    <div ref={sortRef} className="sortby">
      <div className="sortby__select" onClick={() => setOpen(!open)}>Sort by</div>
      
      {open && (
        <div className="sortby__popup">
          <ul className='sortby__list'>
            {list.map((item, i) => ( 
              <li
                key={i}
                className={selected === i
                  ? 'sortby__item sortby__item__selected'
                  : 'sortby__item'
                }
                onClick={() => onClickSelected(i, item.sortProperty)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>)
      }
    </div>
  )
}

export default Sortby;
