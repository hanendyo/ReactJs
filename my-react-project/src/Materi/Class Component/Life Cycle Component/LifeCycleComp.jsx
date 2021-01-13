import React, { Component, Fragment } from 'react';

class LifeCycleComp extends Component{

    constructor(props){
        super(props)
        this.state ={
            count: 1
        }
        console.log(`contructor`);
    }

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

    shouldComponentUpdate(nextProps, nextState){ //--> menanyakan/konfirmasi haruskah update.
        console.group(`shouldUpdate`);
        console.log(`np: `, nextProps);
        console.log(`nextstate: `, nextState);
        console.log(`prevstate: `, this.state);
        console.groupEnd();


        if(nextState.count > 4) {
            return false;
        }
        return true;
    }

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
    changeCount =()=> {
        this.setState({
            count: this.state.count + 1
        })
    }
    

    render(){
        console.log(`render`);
      return(
          <Fragment>
              <h1>Lifecycle Component</h1>
              <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
          </Fragment>
      )
  }
}

export default LifeCycleComp;