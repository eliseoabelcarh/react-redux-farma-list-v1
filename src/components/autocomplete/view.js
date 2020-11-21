import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './style'
import './style.css';


export default function View(props) {

    const classes = useStyles();
    const {
        suggestions,
        onChangeText,
        onChangeSelection,
        text
    } = props;
    let [isOpen, setIsOpen] = useState(false);

    return (

        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Buscar…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={text}
                style={{ width: '100%' }}
                onChange={(event) => {
                    const newText = event.target.value;
                    onChangeText(newText);
                    if (!isOpen && newText) {
                        setIsOpen(true)
                    } else if (isOpen && !newText) {
                        setIsOpen(false)
                    }
                }}
                onFocus={() => {
                    if (text) {
                        setIsOpen(true)
                    }
                }}
                onKeyPress={(event) => {
                    if (event.key === 'Enter' && text) {
                        onChangeSelection(text);
                        setIsOpen(false)
                    }
                }}
            />
            {isOpen &&
                <Paper className="container-results" square>
                    {suggestions.map(suggestion =>
                        <MenuItem
                            key={suggestion.Cod_Prod}
                            component="div"
                            onClick={() => {
                                onChangeSelection(suggestion.Nom_Prod);
                                setIsOpen(false)
                            }}
                        >
                            {suggestion.Nom_Prod}
                        </MenuItem>)}
                </Paper>}
        </div>
    )
}
