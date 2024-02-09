import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';
import "./UserList.css"

const UserList = () => {
  const [users, setUsers] = useState([])
  /*  Note:> This user api response dont have the name value so  i loade first name as "username value"*/
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);
  /*
  // Note => if we need the name means we get the user login data firt then agin call "/users/${user.login} " end point for the login list to get all user data
  // use tha login means we need hit more number of api that will havily affected the app ;
  // Below logic we get the all user details 
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        const users = await response.json();
  
        const userDetailsPromises = users.map(async (user) => {
          const userResponse = await fetch(`https://api.github.com/users/${user.login}`);
          const userDetails = await userResponse.json();
          return userDetails;
        });
  
        const userDetails = await Promise.all(userDetailsPromises);
        console.log(userDetails);
        setUsers(userDetails);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUserDetails();
  }, []);*/
  return (
    <div className='body'>
      <h1 style={{ textAlign: "center",margin:0 }}>User List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
export default UserList