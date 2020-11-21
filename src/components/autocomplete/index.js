import React, { Component } from 'react';
import View from './view'
import './style.css';

class Autocomplete extends Component {


    render() {

        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text
        } = this.props;


        return (
            <View
                suggestions={suggestions}
                onChangeText={onChangeText}
                onChangeSelection={onChangeSelection}
                text={text}
            />
        )
    }
}

export default Autocomplete;