import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.password}</td>
    <td>{props.user.email}</td>
    <td>
      <Link to={"edit/" + props.user._id}>edit</Link>
    </td>
  </tr>
)

export default class FindUser extends Component {

  constructor(props) {
      super(props);

      this.state = {users: []};
    }

    componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  userList() {
    return this.state.users.map(currentUser => {
      return <User user={currentUser} key={currentUser._id}/>;
    })
  }

  render() {
    return (
      <div>
      <table>
        <tbody>
            { this.userList() }
        </tbody>
      </table>
      </div>
    )
  }
}
