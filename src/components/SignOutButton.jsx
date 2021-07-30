import React from "react";
import { useMsal } from "@azure/msal-react";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
    const { instance } = useMsal();
    return (
        <button className="ui yellow button" onClick={() => instance.logout()}>
            Sign Out
        </button>
    )
}