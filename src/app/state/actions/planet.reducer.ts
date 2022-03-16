import { Action } from "@ngrx/store";

export function planetListReducer(state: number = 0, action:Action){
    switch( action.type ){
        case 'LOAD':
            return state-1;
        case 'LOADING':
            return state + 1;
        default:
            return state;
    }
}