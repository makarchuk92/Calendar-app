import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { rules } from './../utils/rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from './../store/reducers/action-creators';
import { useTypedSelector } from './../hooks/useTypedSelector';



const LoginForm: React.FC = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {isLoading, error} = useTypedSelector(state => state.auth)
    
    const submit = () => {
        dispatch(AuthActionCreators.Login(username, password ))
    }

    return (
        <Form
            onFinish={submit}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Item>
            { error && <div className='error' >{error}</div>}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading} >
                    Sign in
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm