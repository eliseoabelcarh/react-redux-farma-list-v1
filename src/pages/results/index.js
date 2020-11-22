import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import View from './view'


class Results extends Component {

    render() {

        const { results } = this.props

        return (
            <View
                results={results}
                goTo={(path) => {
                    this.props.history.push(path)
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results,

    }
}


export default withRouter(connect(mapStateToProps)(Results))
