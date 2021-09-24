import React, {FC} from 'react';

const About: FC = () => {
    return (
        <div>
            <div style={{margin: "20px", position: "relative"}}>
                <h2>This application is made using technologies such as:</h2>
                <span style={{position: "absolute",top: "25px", fontSize: "smaller"}}>ver.1.0.42</span>
            </div>
            <div style={{marginTop: "20px"}}>
                <ul>
                    <li>React + TypeScript</li>
                    <li>Hooks: useState, useEffect, useSelector, useDispatch. Custom hooks</li>
                    <li>Redux, React redux typescript, Thunk.</li>
                    <li>React router. Page navigation. BrowserRouter, Route, Switch, Redirect.</li>
                    <li>Conditional rendering.</li>
                    <li>Decomposition</li>
                    <li>Working with the server(mock Data). Axios. JSON. Save in Local Storage</li>
                    <li>Modal window.</li>
                    <li>User authorization.</li>
                    <li>Working with calendar \ events</li>
                    <li>Ant Design</li>
                </ul>
            </div>

        </div>
    );
};

export default About;