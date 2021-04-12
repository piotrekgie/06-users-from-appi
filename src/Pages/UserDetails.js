import React from "react";
import {useLocation, useHistory} from 'react-router-dom';

import UserMap from "./UserMap";
import User from "./User";
import './user.scss';

function UserDetails() {
    const history = useHistory();
    const location = useLocation();
    const user = location.state && location.state.user;

    return (
        <div className="user-details-wrapper">
            <a href="#" className="user-back-link" onClick={(e) => history.goBack()}>Back</a>
            {user &&
            <div className="user-details">
                <User user={user}/>
                <UserMap coordinates={user.location.coordinates}/>
            </div>
            }
        </div>
    );
}

export default UserDetails;