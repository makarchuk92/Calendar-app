import { AuthActionCreators, EventActionCreators } from "./reducers/action-creators";

export const allActionCreators =  {
    ...AuthActionCreators,
    ...EventActionCreators
}