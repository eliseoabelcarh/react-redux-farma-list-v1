import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import createProduct from '../../store/actions/createProduct'
import findCurrentItem from '../../store/actions/findCurrentItem'
import findResults from '../../store/actions/findResults'
import View from './view'


class CreateProduct extends Component {

    constructor(props) {
        super(props)
        this.createProductProp = this.createProductProp.bind(this)
    }

    createProductProp(product) {
        this.props.createProduct(product)
    }


    render() {

        return (
            <View
                findResults={this.props.findResults}
                createProduct={this.createProductProp}
                findCurrentItem={findCurrentItem}
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
    createProduct,
    findCurrentItem,
    findResults

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateProduct))