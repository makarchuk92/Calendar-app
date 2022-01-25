import {Layout, Menu, Row} from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../router/routes'
import { useTypedSelector } from './../hooks/useTypedSelector';
import { AuthActionCreators } from './../store/reducers/action-creators';
import { useActions } from './../hooks/useActions';


const Navbar: React.FC = () => {
     
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const router = useNavigate()
    const {Logout} = useActions()
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth 
                    ? 
                    <>
                        <div style={{color: 'white'}}>{user.username}</div>
                        <Menu  theme="dark" mode="horizontal" selectable={false} >
                            <Menu.Item onClick={Logout}  key={1} >
                                Logout
                            </Menu.Item>
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