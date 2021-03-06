// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as React from 'react';
import { NavLink } from 'react-router-dom';

import * as classes from "./NavigationBar.css";
import { IUserContext, UserDataContext } from '../App';

export class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderNameField(userContext: IUserContext) {
        if (userContext.user && userContext.user.username != "") {
            return (
                <div style={{display: "flex", flexDirection: "row"}}>
                    {`Welcome ${userContext.user.username}!`}
                    <div style={{marginLeft: 22, cursor: "pointer"}} onClick={() => {
                        userContext.updateUser({
                            userId: -1,
                            username: ""
                        });
                    }}>Logout</div>
                </div>
            );
        }
        return (
            <NavLink exact to="/login" className={classes.NavigationBarLoginLink}>
                Login
            </NavLink>
        );
    }

    /**
     * Renders navigation bar
     * @return  {React.Component}   Rendered component
     */
    createNavigationBar() {
        return (
            <div className={classes.NavigationBar}>
                <div className={classes.NavigationBarLeft}>                
                    <NavLink exact to="/" className={classes.NavigationBarTitleLink}>Mental Health Forum</NavLink>
                </div>
                <div className={classes.NavigationBarRight}>
                    <UserDataContext.Consumer>
                        {(userData) => {return this.renderNameField(userData)}}
                    </UserDataContext.Consumer>
                </div>
            </div>
        );
    }
    
    /**
     * Renders navigation bar component
     * @return  {React.Component}   Rendered component
     */
    render() {
        return this.createNavigationBar();
    }
}