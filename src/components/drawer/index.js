import React, { Component } from 'react';
import View from './view'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css';

class Drawer extends Component {






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
                goTo={(path) => {
                    this.props.history.push(path)
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {


    }
}

const mapDispatchToProps = {



}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Drawer))