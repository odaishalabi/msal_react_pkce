![BlackAdi Banner](https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-chinese-style-ink-dragon-banner-image_210265.jpg)

# MSAL.JS - Auth Code Flow with PKCE Demo 🛡️

A Simple React App using OAuth2.0 via Microsoft MSAL library.

## App feature list

- Loging via Microsoft Authentication.
- Using Graph API to fetch user data.

## Getting Started

### Prerequisites

[Node.js](https://nodejs.org/en/) must be installed to run this sample.

To get a local copy up and running, follow the given instructions below:

### Setup

1. [Register a new application](https://docs.microsoft.com/azure/active-directory/develop/scenario-spa-app-registration) in the [Azure Portal](https://portal.azure.com). Ensure that the application is enabled for the [authorization code flow with PKCE](https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-auth-code-flow). This will require that you redirect URI configured in the portal is of type `SPA`.
2. Clone this repository `git clone https://github.com/odaishalabi/msal_react_pkce.git`
3. Create `.env` file in the root of the repository.
4. On the command line, navigate to the root of the repository, and run `npm install` to install the project dependencies via npm.

## Running the sample

1. Configure authentication and authorization parameters:
   1. Open `.env`
   2. Add `REACT_APP_CLIENT_ID:`, then add your app/client ID on AAD Portal.
   3. Add `REACT_APP_AUTHORITY:`, then add `"https://login.microsoftonline.com/common/"` (_note_: This is for multi-tenant applications located on the global Azure cloud. For more information, see the [documentation](https://docs.microsoft.com/azure/active-directory/develop/quickstart-v2-javascript-auth-code)).
   4. Add `REACT_APP_REDIRECT_URL:`, then add the redirect uri you setup on AAD Portal.
   5. Add `REACT_APP_GRAPH_ENDPOINT:`, after the `:` add `"https://graph.microsoft.com/v1.0/me"` (_note_: This is for MS Graph instance located on the global Azure cloud. For more information, see the [documentation](https://docs.microsoft.com/en-us/graph/deployments)).
2. To start the sample application, run `npm start`.
3. Finally, open a browser and navigate to [http://localhost:3000](http://localhost:3000).

## Installation via Docker

```sh
   docker run -it -p 3000:3000 blackadi2019/msal_spa
```
