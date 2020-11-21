import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import findResults from '../../store/actions/findResults'
import deleteProduct from '../../store/actions/deleteProduct'
import View from './view'


class DeleteProduct extends Component {

    constructor(props) {
        super(props)
        this.handleAceptarProp = this.handleAceptarProp.bind(this)
    }


    handleAceptarProp() {
        this.props.deleteProduct(parseInt(this.props.match.params.itemId))
    }


    render() {
        const messageBody = 'Está seguro de borrar el producto?'

        return (
            <View
                findResults={this.props.findResults}
                messageBody={messageBody}
                handleAceptarProp={this.handleAceptarProp}
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

    deleteProduct,
    findResults

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteProduct))