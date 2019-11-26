import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>

    <td>{props.user.email}</td>
    <td>{props.user.username}</td>
    <td>{props.user.password}</td>

    <td>{props.user.genre}</td>
    <td>{props.user.user_type}</td>
    <td>{props.user._id}</td>
    <td><Link to={"/edit/"+props.exercise._id}>edit</Link></td>
  </tr>
)

export default class UserList extends Component {

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
      return <Exercise user={currentUser} key={currentUser._id}/>;
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
