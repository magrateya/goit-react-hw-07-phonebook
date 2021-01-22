import { useSelector, useDispatch } from 'react-redux';

import s from './Filter.module.css';
import { changeFilter } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filterLabel}>
      <span className={s.filterTitle}>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      ></input>
    </label>
  );
}
