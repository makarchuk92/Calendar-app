import React from 'react'
import { Form, Input, Button } from 'antd'
import { rules } from './../utils/rules';



const LoginForm: React.FC = () => {
    return (
        <Form>
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Sign in
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm