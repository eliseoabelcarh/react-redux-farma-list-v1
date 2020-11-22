import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import View from './view'


class Consultorio extends Component {

    render() {

        const { results } = this.props

        return (
            <View
                results={results}
            />
        )
    }
}

const mapStateToProps = (state) => {

    return {
        results: state.resultsAPI,

    }
}


export default withRouter(connect(mapStateToProps)(Consultorio))
