import {Layout, Menu, Row} from 'antd';
import React, {FC} from 'react';
import {useHistory} from "react-router-dom";
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    return (
        <Layout.Header>

            <Row justify='end'>

                {isAuth
                    ? <>
                        <Menu theme='dark' mode='vertical' selectable={false}
                              style={{ marginTop: "8px"}}
                        >
                            <Menu.Item
                                onClick={() => router.push(RouteNames.ABOUT)}

                            >About
                            </Menu.Item>
                        </Menu>
                        <Menu theme='dark' mode='vertical' selectable={false}  style={{ margin: " 8px  100px 0px 0px"}}>
                            <Menu.Item
                                onClick={() => router.push(RouteNames.EVENT)}
                                key={1}
                            >Main
                            </Menu.Item>
                        </Menu>

                        <div style={{color: 'white', marginRight: "20px"}} >{user.username}</div>



                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item
                                onClick={logout}
                                key={1}
                            >Logout
                            </Menu.Item>
                        </Menu>

                    </>
                    : <Menu theme='dark' mode='vertical' selectable={false}>
                        <Menu.Item
                            onClick={() => router.push(RouteNames.LOGIN)}
                            key={1}
                        >Login
                        </Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;