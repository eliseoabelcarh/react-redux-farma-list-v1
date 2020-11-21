import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import View from './view'


class NotificationSuccess extends Component {

    render() {

        const { openNotification, message } = this.props

        return (
            <View
                openNotification={openNotification}
                message={message}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
export default withRouter(connect(mapStateToProps)(NotificationSuccess))
