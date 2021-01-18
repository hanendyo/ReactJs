import Actiontype from "./ActionType";

// store global
const globalState = {
    totalOrder: 0
}

// reducer
const GlobalReducer =(state = globalState, action)=> {
  // counter product
  switch(action.type){
    case Actiontype.PLUS_ORDER:
      return {
        // ada (...state) agar tidak ter-overwrite. 
        ...state,
        totalOrder: state.totalOrder + 1
      }
    case Actiontype.MINUS_ORDER:
      let totalOrder = 0;
      if(state.totalOrder > 0){
        totalOrder = state.totalOrder - 1  
      }
      return {
        ...state,
        totalOrder: totalOrder      
      }
    case Actiontype.CHANGE_COUNT:
      return {
        ...state,
        totalOrder: state.totalOrder + 1
      }
      default:
        return state;   
  }
}

export default GlobalReducer;