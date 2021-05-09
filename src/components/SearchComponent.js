import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  matchText: {
    color: theme.palette.info.main
  },
  inputText: {
    '& label.Mui-focused': {
      color: theme.palette.info.main
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.info.main
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.info.main
      }
    }
  }
}));


const SearchComponent = ({items}) => {
  const [query, setquery] = useState('');
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClick = useCallback(value => {
    setquery(value);
    setOpen(true);
  }, []);
  const handleClose = useCallback((event, reason) => reason !== 'clickaway' && setOpen(false), []);


  const renderItem = useCallback((value, index) => {
    const indexQueryStart = String(value.toLowerCase()).indexOf(query.toLowerCase());
    const firstString = String(value).substr(0, indexQueryStart);
    const matchString = String(value).substr(indexQueryStart, query.length);
    const lastString = String(value).substr(indexQueryStart + query.length, value.length);

    const conditionalProps = {};
    if (matchString && matchString !== '' && matchString !== value) {
      conditionalProps.secondary = <>
        {firstString}<strong className={classes.matchText}>{matchString}</strong>{lastString}
      </>;
    }

    return <>
      <ListItem onClick={() => matchString !== value && handleClick(value)} button={matchString !== value}>
        <ListItemText
          primary={`${index}. ${value}`}
          {...conditionalProps}
        />
      </ListItem>
      <Divider variant="middle" />
    </>;
  }, [query, classes.matchText, handleClick]);

  return (<>
    <div className={'search-component'}>
      {'Search component'}
      <br/>
      <TextField
        value={query}
        className={classes.inputText}
        id="standard-search"
        onChange={e => setquery(e.target.value)}
        label="Search field"
        type="search"
        variant="outlined"
        fullWidth
        autoComplete="off"
      />
      <List className={classes.root}>
        {
          items.map((value, index) => value.toLowerCase().match(RegExp(query.toLowerCase())) &&
    renderItem(value, index))
        }
      </List>
    </div>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        {'Selected element'}
      </Alert>
    </Snackbar>
  </>
  );
};

SearchComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SearchComponent;
