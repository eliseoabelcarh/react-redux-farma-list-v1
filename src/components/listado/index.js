import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import View from './view'


class Listado extends Component {

    render() {

        const { products } = this.props

        return (
            <View
                products={products}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {

        products: state.products
    }
}

export default withRouter(connect(mapStateToProps)(Listado))
