import React from 'react';



import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    Friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
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
                      <li>{friend.name}</li>
                      <li>{friend.age}</li>
                      <li>{friend.email}</li>
                  </ul>
            
         ))}
      </div>
    );
  }
}

export default FriendsList;
