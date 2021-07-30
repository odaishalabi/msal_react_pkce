/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props 
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <div className="ui inverted pointing menu">
                <a href="/msal_react/" className="item ">
                    <i  className="react icon blue"/>
                    BlackAdi
                </a>
                <div className="right menu">
                    <span className="item">
                    MSAL Sample - Microsoft Identity Platform
                    </span>
                    { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                </div>
            </div>


            <h2><center>Welcome to the Land of OAuth - <i className="smile outline icon"/></center></h2>
            <br />
            <br />
            {props.children}
        </>
    );
};
