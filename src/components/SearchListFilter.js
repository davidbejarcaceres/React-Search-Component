import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './style.css';

const renderItem = (value, index) => (
  <div key={index} className={'list-item'}>
    <p>
      {index}. {value}
    </p>
  </div>
);

const SearchListFilter = ({items}) => {
  const [lista, setlista] = useState(items);

  return (
    <div className={'search-component'}>
      Search component
      <br />
      <TextField
        id="standard-search"
        onChange={e =>
          setlista(
            items.filter(valor =>
              valor.toLowerCase().match(RegExp(e.target.value.toLowerCase()))
            )
          )
        }
        label="Search field"
        type="search"
      />
      <br />
      {lista.map((value, index) => renderItem(value, index))}
    </div>
  );
};

SearchListFilter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SearchListFilter;
