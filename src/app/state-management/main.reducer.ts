import { State, initialState } from './main.state';
import {ActionReducer, Action} from "@ngrx/store";
import { INCREMENT, EVENT_FROM_EFFECT } from './main.actions';

export const mainStoreReducer : ActionReducer<State> = ( state = initialState,action : Action ) => {
     switch(action.type){
          case INCREMENT :  return { counter : state.counter + 1 };
          case EVENT_FROM_EFFECT : return { counter : 20 };
          default : return  state
     }
    
};
  
