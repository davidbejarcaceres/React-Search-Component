import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import "./style.css"

const renderItem = (value, index) => {    
    return(
        <div className={"list-item"}>
            <p key={value}>{index}.  {value}</p>
        </div>
    );
};

const SearchComponent = ({items}) => {
    const [query, setquery] = useState("");

    return (
        <div className={"search-component"}>
            Search component
            <br/>
            <TextField id="standard-search" onChange={(e) => setquery(e.target.value)} label="Search field" type="search" />
            <br/>
            {items.map((value, index) => value.toLowerCase().match(RegExp(query.toLowerCase())) && renderItem(value, index))}
        </div>
    )
}

SearchComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SearchComponent;
