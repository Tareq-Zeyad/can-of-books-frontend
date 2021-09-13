import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider} from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
    domain="dev-5fl-4k66.us.auth0.com"
    clientId="emvzt0Lyh8hk4JUKwDwCpaNcjhdDUoL9"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
