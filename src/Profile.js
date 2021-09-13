import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user, isAthenticated } = this.props.auth0;
    return (
        <>
        {isAthenticated && <div> Hello {user.name} </div>}
        </>
    )
  }
}

export default withAuth0(Profile);