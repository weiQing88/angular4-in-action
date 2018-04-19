import { Action } from "@ngrx/store";
export interface State {
     counter : number
}

export const initialState : State = {
      counter : 10
}

export interface  customAction {
      type : string,
      payload ?: any
}
