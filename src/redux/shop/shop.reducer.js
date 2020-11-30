
import ShopActionTypes from './shop.types';

const INITIAL_STATE={
    collections:null
}

const shopReducer=(state=INITIAL_STATE,action)=>{
    console.log(state);
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            state.collections = action.payload;
            return{
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
    
}
export default shopReducer;