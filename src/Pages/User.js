import {Link} from "react-router-dom";

function User({user}) {

    return (
        <div className="user">
            <Link to={{
                pathname: `/user/${user.login.uuid}`,
                state: {
                    user: user
                }
            }}>
                {user.name.title} {user.name.first} {user.name.last}
            </Link>
        </div>
    );
}

export default User;