import React, { Component } from 'react';
import View from './view'


import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import findResultsAPI from '../../store/actions/findResultsAPI'

import './style.css';


class SearchDiseases extends Component {

    constructor(props) {
        super(props)
        this.getResultsAPI = this.getResultsAPI.bind(this)
    }

    getResultsAPI(keyword) {
        this.props.findResultsAPI(keyword)
    }


    render() {

        return (
            <View
                getResultsAPI={this.getResultsAPI}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {

        products: state.resultsAPI

    }
}

const mapDispatchToProps = {

    findResultsAPI

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchDiseases))
