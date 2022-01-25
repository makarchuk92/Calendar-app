import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';



const App: React.FC = () => {

  const {setUser, setIsAuth} = useActions()

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setUser({username: localStorage.getItem('username' || '')} as IUser )
      setIsAuth(true)
    }
  }, [])

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App;
