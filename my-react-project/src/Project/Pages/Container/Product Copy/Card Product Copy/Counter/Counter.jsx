// REDUX
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Actiontype from '../../../../Redux/Reducer/ActionType';


class Counter extends Component{

    // //state 
    // state = {
    //     order: 4
    // }


    // //method
    // handleCounterChangeCounter=(newValue)=>{
    //     this.props.onCounterChangeCardProduct(newValue);
    // }

    // handleMinus =()=>{
    //     if(this.state.order > 0){
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChangeCounter(this.state.order)
    //         })
    //     }
    // }
    // handlePlus =()=>{
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChangeCounter(this.state.order)
    //     })
    // }



    render(){
        console.log(`render: `,this);
        return(

        <div className="counter">
            <button className="minus" onClick={this.props.handleMinus}>-</button>
            <input type="text" value={this.props.order}/>
            <button className="plus" onClick={this.props.handlePlus}>+</button>
        </div>
        )
    }
}

// ubah value dari state "lokal" menjadi valuenya global state.
const mapStateToProps =(state)=>{
    console.log(`state: `, state);
    return{
        order: state.totalOrder
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        handlePlus: ()=> dispatch({type:Actiontype.PLUS_ORDER}),
        handleMinus: ()=> dispatch({type:Actiontype.MINUS_ORDER}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Counter);




// // CONTEXT
// import React, { Component } from 'react'
// import { GlobalConsumer } from '../../../../../../Context/Context';


// class Counter extends Component{
//     render(){
//         console.log(`render: `,this);
//         // console.log(`props: `,this.props);
//         return(
//             <div className="counter">
//                 <button className="minus" onClick={()=>this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
//                 <input type="text" value={this.props.state.totalOrder}/>
//                 <button className="plus" onClick={()=>this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
//             </div>
//         )
//     }
// }



// export default GlobalConsumer (Counter);


