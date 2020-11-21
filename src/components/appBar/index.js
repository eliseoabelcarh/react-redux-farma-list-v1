
import React, { Component } from 'react'
import View from './view'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import findSuggestions from '../../store/actions/findSuggestions'
import findResults from '../../store/actions/findResults'


class AppBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onChangeText = this.onChangeText.bind(this)
        this.onChangeSelection = this.onChangeSelection.bind(this)
    }


    onChangeText(text) {
        this.setState({ text })
        this.props.findSuggestions(text)
    }

    onChangeSelection = (text) => {
        this.setState({ text })
        this.props.findResults(text)
        this.props.history.push('/results')

    }



    render() {
        const { text } = this.state
        const { suggestions } = this.props

        return (
            <View
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}


            />







        )
    }
}


const mapStateToProps = (state) => {

    return {
        suggestions: state.suggestions,

    }
}

const mapDispatchToProps = {
    findSuggestions,
    findResults
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBar))