import React, { Component } from 'react';
import Babi from '../../img/porkBelly.jpg'

class CardProduct extends Component {

      //state 
      state = {
        order: 4
    }


    //method
    handleCounterChangeCardProduct=(newValue)=>{
        this.props.onCounterChange(newValue);
    }

    handleMinus =()=>{
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChangeCardProduct(this.state.order)
            })
        }
    }
    handlePlus =()=>{
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChangeCardProduct(this.state.order)
        })
    }

    render(){
        console.log(this);
        return(
            <div className="card">
                <div className="img-thumb-product">
                    <img src={Babi} alt=""/>
                </div>
                <p className="product-title">Pork Belly</p>
                <p className="product-price">Rp 10000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}


export default CardProduct;
 