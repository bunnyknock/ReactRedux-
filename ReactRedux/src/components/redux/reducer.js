const intialState= {
    count:0
}

const counterReducer = (state =intialState , action )=>{
   if(action.type == 'increment'){
    return {...state , count:state.count + action.payload}
   }
   else if(action.type == 'decrement'){
    return {...state , count:state.count - action.payload}
   }
   else return state;
}

export default counterReducer;