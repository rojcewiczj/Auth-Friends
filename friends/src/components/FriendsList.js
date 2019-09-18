import React from 'react';
import EditFriend from './EditFriend';
import DeleteFriend from './DeleteFriend';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    Friends: []
  };

  componentDidUpdate() {
    this.getFriends();
  }


  getFriends = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        this.setState({ Friends: res.data});
      })
      
      .catch(err => console.log(err));
  };


  render() {
      console.log(this.state.Friends)
    
    return (
      <div>
          {this.state.Friends.map(friend => (
           
                  <ul>    
                      <h3> {friend.id}</h3>
                      
                      <li>{friend.name}</li>
                      <li>{friend.age}</li>
                      <li>{friend.email}</li>
                      
                  </ul>
            
         ))}
         <EditFriend />
         <DeleteFriend />
      </div>
    );
  }
}

export default FriendsList;
