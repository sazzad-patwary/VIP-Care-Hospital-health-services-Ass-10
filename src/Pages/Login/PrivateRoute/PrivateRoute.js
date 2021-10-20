import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {

    const { user } = useFirebase();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}

            ></Redirect>}
        >
        </Route >
    );
};

export default PrivateRoute;