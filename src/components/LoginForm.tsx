import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()

    const submit = () => {
     login(username, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: "red"}}>
                {error}
            </div>}
            <Form.Item
                label='Username'
                name='username'
                rules={[rules.required('Please enter your name')]}
            >
                <Input value={username}
                       onChange={(e) => setUsername(e.currentTarget.value)}/>
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                rules={[rules.required('Please enter your password')]}
            >
                <Input value={password}
                       onChange={(e) => setPassword(e.currentTarget.value)}
                       type={"password"}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit"
                        loading={isLoading}
                >
                    Sign in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;