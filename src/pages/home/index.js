import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import View from './view'


class Home extends Component {

    render() {

        const datos = {
            title: 'HOME',
        }
        return (
            <View
                data={datos}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // Home: state.Home,

    }
}


export default withRouter(connect(mapStateToProps)(Home))
