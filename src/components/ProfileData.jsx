import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */
export const ProfileData = (props) => {
    console.log(props.graphData);

    return (
        <div className="ui people shape">
            <div className="sides">
                <div className="active side">
                    <div className="ui card red" style={{width: "100%"}}>
                        <div class="image">
                            <i className="user icon" />
                        </div>
                        <div class="content">
                            <div class="header">
                                <i className="microsoft icon" />
                                Azure AD Profile Info
                            </div>
                            <br/>
                            <div className="description">
                                <p><strong>First Name: </strong> {props.graphData.givenName}</p>
                                <p><strong>Last Name: </strong> {props.graphData.surname}</p>
                                <p><strong>Email: </strong> {props.graphData.userPrincipalName}</p>
                                <p><strong>Mobile Phone: </strong> {props.graphData.mobilePhone}</p>
                                <p><strong>Job: </strong> {props.graphData.jobTitle}</p>
                                <p><strong>Id: </strong> {props.graphData.id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};