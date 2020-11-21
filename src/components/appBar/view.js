import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '../autocomplete'
import Drawer from '../drawer'
import useStyles from './style'
import CreateProduct from '../createProduct';


export default function View(props) {
    const classes = useStyles();
    const { text, suggestions, onChangeText, onChangeSelection } = props

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>

                    <Drawer />

                    <Typography className={classes.title} variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    <Autocomplete
                        text={text}
                        suggestions={suggestions}
                        onChangeText={onChangeText}
                        onChangeSelection={onChangeSelection}
                    />

                    <CreateProduct />

                </Toolbar>
            </AppBar>
        </div>
    );
}
