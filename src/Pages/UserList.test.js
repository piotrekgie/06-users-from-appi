import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import UserList from "./UserList";
import User from "./User";

describe('User List component', () => {
  it('render user list correctly', () => {
    const users = require('../data/users.test.json');
    const wrapper = mount(
      <Router>
        <UserList users={users} />
      </Router>
    );

    expect(wrapper.find(User).length).toBe(10);
  })

  it('render user empty list correctly', () => {
    const users = [];
    const wrapper = mount(
      <Router>
        <UserList users={users} />
      </Router>
    );

    expect(wrapper.find(User).length).toBe(0);
  })
});