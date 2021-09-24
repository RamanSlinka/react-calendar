import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        <div>


            {isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />)}
                <Redirect to={RouteNames.EVENT}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                )}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>}
        </div>

    );
};

export default AppRouter;