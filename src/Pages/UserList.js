import User from "./User";
import './users.scss';

function UserList({users}) {
    return (
        <>
            <h2 className="user-list-header">Users List</h2>
            <div className="user-list">
                    {users && users.map((user) => (
                        <User key={user.login.uuid} user={user}/>
                    ))}
            </div>
        </>
    )
}

export default UserList;