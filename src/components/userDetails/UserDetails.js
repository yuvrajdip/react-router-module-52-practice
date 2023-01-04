import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const userDetail = useLoaderData();

  console.log(userDetail);
  const { name , website , email , phone } = userDetail ;

  return (
    <div>
      <h2>Full Name : {name}</h2>
      <p>email : {email}</p>
      <p>Phone : {phone}</p>
      <p>Website : {website}</p>
    </div>
  );
};

export default UserDetails;