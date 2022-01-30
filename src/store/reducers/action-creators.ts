import { IEvent } from '../../models/IEvent';
import { AppDispatch } from '../store';
import { IUser } from './../../models/IUser';
import { AuthActionEnum, SetAuthAction, SetUserAction, SetErrorAction, SetIsLoadingAction } from './authReducer';
import { EventActionEnum, SetEvensAciton, SetGuestsAcion } from './eventReducer';
import UserService from './../../api/UserService';

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    Login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))

            setTimeout( async() => {
                const response = await UserService.getUsers()
                const mockUser = response.data.find(user => 
                    user.username === username && user.password === password)
                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUser))
                } else {
                    dispatch(AuthActionCreators.setError('Incorrect username or password'))
                } 
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)
            

            
        } catch (error) {
            dispatch(AuthActionCreators.setError('Error trying to login'))
        }
    },
    Logout: () => async(dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}



export const EventActionCreators = {
    setGuests: (guests: IUser[]): SetGuestsAcion => ({type: EventActionEnum.SET_GUESTS, payload: guests}),
    setEvents: (events: IEvent[]): SetEvensAciton => ({type: EventActionEnum.SET_EVENTS, payload: events}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (error) {
            console.log(error);
            
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || "[]"
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem("events", JSON.stringify(json))
        } catch (error) {
            console.log(error);
            
        }
    },
    fetchEvents: (guestName: string, authorName: string ) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || "[]"
            const json = JSON.parse(events) as IEvent[]
            const currentUserEvents = json.filter(ev => 
                ev.author ===  authorName || ev.guest === guestName)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (error) {
            console.log(error);
            
        }
    }
}