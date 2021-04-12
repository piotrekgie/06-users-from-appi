import React from "react";
import {Link} from "react-router-dom";

import User from "./User";
import './users.scss';

function UserList({users}) {
    return (
        <>
            <h2 className="user-list-header">Users List</h2>
            <div className="user-list">
                {users && users.map((user) => (
                    <Link key={user.login.uuid} to={{
                        pathname: `/user/${user.login.uuid}`,
                        state: {
                            user: user
                        }
                    }}>
                        <User user={user}/>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default UserList;