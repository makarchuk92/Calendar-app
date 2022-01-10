
interface AuthState {
    isAuth: boolean
}
const initialState: AuthState = {
    isAuth: false
}


enum AuthActionEnum {
    SET_AUTH = "SET_AUTH"
}

interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH
    payload: boolean
}

type AuthAction = SetAuthAction




export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch(action.type) {
        case AuthActionEnum.SET_AUTH: 
            return {...state, isAuth: action.payload}
        default: 
            return state
    }
}