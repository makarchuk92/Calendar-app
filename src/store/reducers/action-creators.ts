import { AppDispatch } from '../store';
import { IUser } from './../../models/IUser';
import { AuthActionEnum, SetAuthAction, SetUserAction, SetErrorAction, SetIsLoadingAction } from './authReducer';

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    Login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        
    }
}