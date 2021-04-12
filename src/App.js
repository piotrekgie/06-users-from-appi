import {BrowserRouter, Route, Switch} from "react-router-dom";

import UserList from "./Pages/UserList";
import UserDetails from "./Pages/UserDetails";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={UserList}/>
                    <Route exact path="/user/:userId" component={UserDetails}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
