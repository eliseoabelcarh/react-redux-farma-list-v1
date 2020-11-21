import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import findCurrentItemStock from '../../store/actions/findCurrentItemStock'
import updateCurrentItemStock from '../../store/actions/updateCurrentItemStock'
import View from './view'


class EditStock extends Component {

    componentDidMount() {
        //dispara disptach para que state.currentItem se actualice 
        this.props.findCurrentItemStock(parseInt(this.props.match.params.itemId))

    }

    render() {

        const { currentItemStock, updateCurrentItemStock } = this.props

        return (
            <View
                currentItemStock={currentItemStock}
                updateCurrentItemStock={updateCurrentItemStock}
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
    findCurrentItemStock, updateCurrentItemStock

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditStock))