import {ActionReducer, Action} from "@ngrx/store";
import * as ActionsCollected from  '../actions/app.action';
import { State,initialState } from '../main.state';


export const testReducer : ActionReducer<State> = (state = initialState, action : Action) => {
        switch(action.type){
               case 'TESTACTION' : return { initStatus : '12312312' };
               case 'sign' : return { initStatus : '234234234' }
               default : return state;
        }
     
}

 