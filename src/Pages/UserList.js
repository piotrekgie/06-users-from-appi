import React, {useState, useEffect} from "react";

import User from "./User";
import './users.scss';

function UserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setError(true);
            });
    }, []);

    return (
        <>
            <h2 className="user-list-header">Users List</h2>
            <div className="user-list">
                {isLoading && <div>Loading...</div>}
                {hasError && <div>Something went wrong. Please try again later.</div>}
                {users && users.map((user) => (
                    <User key={user.login.uuid} user={user}/>
                ))}
            </div>
        </>
    )
}

export default UserList;