import {Layout, Menu, Row} from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../router/routes'
import { useTypedSelector } from './../hooks/useTypedSelector';


const Navbar: React.FC = () => {
     
    const {isAuth} = useTypedSelector(state => state.auth)
    const router = useNavigate()
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth 
                    ? 
                    <>
                        <div style={{color: 'white'}}>Andrew</div>
                        <Menu  theme="dark" mode="horizontal" selectable={false} >
                            <Menu.Item onClick={() => console.log('logout') }  key={1} >Logout</Menu.Item>
                        </Menu>
                    </>

                    :                     
                    <Menu  theme="dark" mode="vertical" selectable={false} >
                        <Menu.Item  onClick={() => router(RouteNames.LOGIN)}  key={2} >Login</Menu.Item>
                    </Menu> 
                }
                
            </Row>
        </Layout.Header>
    )








}

export default Navbar