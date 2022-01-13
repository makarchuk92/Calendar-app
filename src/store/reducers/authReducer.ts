import { IUser } from './../../models/IUser';

interface AuthState {
    isAuth: boolean
    user: IUser
    isLoading: boolean
    error: string

}
const initialState: AuthState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {} as IUser
}


export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR"
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH
    payload: boolean
}
export interface SetUserAction {
    type: AuthActionEnum.SET_USER
    payload: IUser
}
export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING
    payload: boolean
}
export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR
    payload: string
}

type AuthAction = SetAuthAction | SetUserAction | SetIsLoadingAction | SetErrorAction




export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false  }
        case AuthActionEnum.SET_USER:
            return { ...state, user: action.payload }
        case AuthActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload}
        case AuthActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false  }
        default:
            return state
    }
}