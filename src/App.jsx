import React, { useState } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { PageLayout } from "./components/PageLayout";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";
import "./styles/App.css";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      });

  }

  console.log("acoounts:" + accounts[0]);
  return (
    <>
        <h2 className="ui header brown">Welcome {accounts[0].name}</h2>
        {graphData ? (
          <ProfileData graphData={graphData} />
        ) : (
          <button className="ui primary button" onClick={RequestProfileData}>
            <i className="microsoft icon" />
            Get Profile Information
          </button>
        )}

    </>
  );
};

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {
  //console.log("secret: "+process.env.REACT_APP_CLIENT_ID);
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <div className="ui container">
          <h5 className="ui floating message yellow"><i className="sign-in icon"></i>
            Please sign-in to see your profile information.
          </h5>
        </div>
        
      </UnauthenticatedTemplate>
    </div>
  );
};

export default function App() {
  return (
    <PageLayout>
      <MainContent />
    </PageLayout>
  );
}
