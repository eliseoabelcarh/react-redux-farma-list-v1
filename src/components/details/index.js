import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import findCurrentItem from '../../store/actions/findCurrentItem'
import findCurrentItemStock from '../../store/actions/findCurrentItemStock'
import View from './view'




class Details extends Component {



    componentDidMount() {
        //dispara disptach para que state.currentItem se actualice 
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId))
        this.props.findCurrentItemStock(parseInt(this.props.match.params.itemId))
    }



    render() {

        const { currentItem, currentItemStock } = this.props

        return (
            <View
                currentItem={currentItem}
                currentItemStock={currentItemStock}
                goTo={(path) => {
                    this.props.history.push(path)
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //state.currentItem viene actualizado según el itemId del route path
        currentItem: state.currentItem,
        currentItemStock: state.currentItemStock,
    }
}

const mapDispatchToProps = {
    findCurrentItem,
    findCurrentItemStock,

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details))