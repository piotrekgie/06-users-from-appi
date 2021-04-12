import React from "react";
import {useLocation, useHistory} from 'react-router-dom';

import './user.scss';

function UserDetails() {
    const history = useHistory();
    const location = useLocation();
    const user = location.state && location.state.user;
    const userLocation = (user && user.location) ?
        (user.location.street.name + ' '  + user.location.street.number + ' ' + user.location.city) :
        'N/A';
    const userName = (user && user.location) ?
        (user.name.title + ' ' + user.name.first + ' ' + user.name.last) :
        'No name was provided';

    return (
        <div className="user-details-wrapper">
            <a href="#" className="user-back-link" onClick={(e) => history.goBack()}>Back</a>
            {user &&
            <div className="user-details">
                <div className="user-photo">
                    <img alt="user-photo" title="User photo" src={user.picture.medium}/>
                </div>
                <div className="user-data">
                    <div><label>Name:</label>{userName}</div>
                    <div><label>Gender:</label>{user.gender}</div>
                    <div><label>Email:</label>{user.email}</div>
                    <div><label>Dob:</label>{user.dob.date}</div>
                    <div><label>Age:</label>{user.dob.age}</div>
                    <div><label>Phone:</label>{user.phone}</div>
                    <div><label>Cell:</label>{user.cell}</div>
                    <div><label>Address:</label>{userLocation}</div>
                </div>
            </div>
            }
        </div>
    );
}

export default UserDetails;