import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css"

import UserDetails from "./Pages/UserDetails";
import UsersList from "./Pages/UserList";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const json = await response.json();
        console.log(json.results);

        setUsers(json.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
      // fetch('https://randomuser.me/api/?results=10')
      //     .then((response) => response.json())
      //     .then((data) => {
      //         setUsers(data.results);
      //     })
      //     .catch((error) => {
      //         console.log(error);
      //         setError(true);
      //     })
      //   .finally(() => {
      //       setLoading(false);
      //   });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoading && <div>Loading...</div>}
        {hasError && <div>Something went wrong. Please try again later.</div>}
        <ReactPlaceholder
          type='text'
          rows={10}
          ready={!isLoading}
          style={{width: 300, marginTop: 10}}
        >
          <Switch>
            <Route exact path="/">
              <UsersList users={users}/>
            </Route>
            <Route exact path="/user/:userId" component={UserDetails}/>
          </Switch>
        </ReactPlaceholder>
      </BrowserRouter>
    </div>
  );
}

export default App;
