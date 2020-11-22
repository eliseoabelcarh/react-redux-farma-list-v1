import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import View from './view'


class Medicamentos extends Component {

    render() {

        return (
            <View />
        )
    }
}

const mapStateToProps = (state) => {
    return {



    }
}


export default withRouter(connect(mapStateToProps)(Medicamentos))
