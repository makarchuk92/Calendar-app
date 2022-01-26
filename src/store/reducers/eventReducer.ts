import { IUser } from './../../models/IUser';
import { IEvent } from './../../models/IEvent';

interface EventState {
    guests: IUser[]
    events: IEvent[]
}
const initialState: EventState = {
    guests: [],
    events: []

}

export enum EventActionEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS"
}
export interface SetGuestsAcion {
    type: EventActionEnum.SET_GUESTS
    payload: IUser[]
}
export interface SetEvensAciton {
    type: EventActionEnum.SET_EVENTS
    payload: IEvent[]
}

type EventsAction = SetGuestsAcion | SetEvensAciton

export default function eventReducer(state = initialState, action: EventsAction): EventState {
    switch(action.type) {
        case EventActionEnum.SET_GUESTS:
            return {...state, guests: action.payload}
        case EventActionEnum.SET_EVENTS:
            return {...state, events: action.payload}    
        default:
            return state
    }
}