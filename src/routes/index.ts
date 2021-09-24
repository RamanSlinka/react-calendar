import React from 'react';
import Login from "../pages/Login";
import Event from "../pages/Event";
import About from "../components/About";

export interface IRoute {
    path: string
    component: React.ComponentType;
    exact?: boolean
}

export enum RouteNames {
    ABOUT = '/about',
    LOGIN = '/login',
    EVENT = '/'
}


export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login},
    {path: RouteNames.ABOUT, exact: true, component: About}
]

export const privateRoutes : IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event},
    {path: RouteNames.ABOUT, exact: true, component: About}
]