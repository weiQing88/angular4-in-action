import { State, initialState, customAction } from './main.state';
import {ActionReducer, Action} from "@ngrx/store";
import { INCREMENT, EVENT_FROM_EFFECT } from './main.actions';




export const mainStoreReducer : ActionReducer<State> = ( state = initialState,action : customAction ) => {
     switch(action.type){
          case INCREMENT :  return { counter : state.counter + 1 , payload : action.payload };
          case EVENT_FROM_EFFECT : return { counter : 20, payload : action.payload };
          default : return  state
     }
    
};
  
