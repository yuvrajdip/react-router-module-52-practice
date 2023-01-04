import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = ({user}) => {
  // console.log(user);

  const {id, phone , username} = user;
  return (
    <div className='user'>
      <p>Username : {username}</p>
      <p>Phone : {phone}</p>

      <h3>
        User Details : 
        <Link to={`/users/user/${id}`}>
          <p style={{'display':'inline'}}> {id}</p>
        </Link>
      </h3>
    </div>
  );
};

export default User;