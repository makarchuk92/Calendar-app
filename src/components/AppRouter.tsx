import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { privateRoutes, RouteNames } from '../router/routes'
import { publicRoutes } from '../router/routes';
import { useTypedSelector } from './../hooks/useTypedSelector';

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.element />} key={route.path} />
                )}
                <Route path='*' element={<Navigate to={RouteNames.EVENT} />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<route.element />} key={route.path} />
                )}
                <Route path='*' element={<Navigate to={RouteNames.LOGIN} />} />
            </Routes>
    )



    
}

export default AppRouter