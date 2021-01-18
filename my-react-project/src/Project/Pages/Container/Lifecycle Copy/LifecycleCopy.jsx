// REDUX
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Actiontype from '../../Redux/Reducer/ActionType';

class LifeCycleComp extends Component{

    // constructor(props){
    //     super(props)
    //     this.state ={
    //         count: 1
    //     }
    //     console.log(`contructor`);
    // }

    // Lifecycle
    static getDerivedStateFromProps(props, state){
        console.log(`getDerivedStateFromProps`);
        return null;
    }

    componentDidMount(){  //--> merubah state di DidMount
        console.log(`didMount`);
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000);
    }

    // shouldComponentUpdate(nextProps, nextState){ //--> menanyakan/konfirmasi haruskah update.
    //     console.group(`shouldUpdate`);
    //     console.log(`np: `, nextProps);
    //     console.log(`nextstate: `, nextState);
    //     console.log(`prevstate: `, this);
    //     console.groupEnd();

    //     return null;

    //     // if(this.props.count > 4) {
    //     //     return false;
    //     // }
    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`snapBeforeUpdate`);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(`didUpdate`);
    }

    componentWillUnmount(){
        console.log(`willUnmount`);
    }
    //

    //method
    // changeCount =()=> {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    

    render(){
        console.log(`render`);
      return(
            <Fragment>
                <h1>Lifecycle Component</h1>
                <button button className="btn" onClick={this.props.changeCount}>Component Button {this.props.count}</button>
                <p>Global State {this.props.count}</p>
            </Fragment>
      )
  }
}


const mapStateToProps =(state)=>{
    return {
        count: state.totalOrder
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        changeCount: ()=> dispatch({type: Actiontype.CHANGE_COUNT})
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (LifeCycleComp);





// // CONTEXT
// import React, { Component, Fragment } from 'react';
// import { GlobalConsumer } from '../../../../Context/Context';
// import Actiontype from '../../Redux/Reducer/ActionType';

// class LifeCycleComp extends Component{

//     // constructor(props){
//     //     super(props)
//     //     this.state ={
//     //         count: 1
//     //     }
//     //     console.log(`contructor`);
//     // }

//     // Lifecycle
//     static getDerivedStateFromProps(props, state){
//         console.log(`getDerivedStateFromProps`);
//         return null;
//     }

//     componentDidMount(){  //--> merubah state di DidMount
//         console.log(`didMount`);
//         // setTimeout(() => {
//         //     this.setState({
//         //         count: 2
//         //     })
//         // }, 5000);
//     }

//     // shouldComponentUpdate(nextProps, nextState){ //--> menanyakan/konfirmasi haruskah update.
//     //     console.group(`shouldUpdate`);
//     //     console.log(`np: `, nextProps);
//     //     console.log(`nextstate: `, nextState);
//     //     console.log(`prevstate: `, this);
//     //     console.groupEnd();

//     //     return null;

//     //     // if(this.props.count > 4) {
//     //     //     return false;
//     //     // }
//     //     // return true;
//     // }

//     getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log(`snapBeforeUpdate`);
//         return null;
//     }

//     componentDidUpdate(prevProps, prevState, snapshot){
//         console.log(`didUpdate`);
//     }

//     componentWillUnmount(){
//         console.log(`willUnmount`);
//     }
//     //

//     //method
//     // changeCount =()=> {
//     //     this.setState({
//     //         count: this.state.count + 1
//     //     })
//     // }
    

//     render(){
//         console.log(`render`);
//       return(
//                         <Fragment>
//                             <h1>Lifecycle Component</h1>
//                             <button button className="btn" onClick={()=>this.props.dispatch({type: 'CHANGE_COUNT'})}>Component Button {this.props.state.totalOrder}</button>
//                             <p>Global State {this.props.state.totalOrder}</p>
//                         </Fragment>
          
//       )
//   }
// }





// export default GlobalConsumer (LifeCycleComp);