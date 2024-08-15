/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useState } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
  const [users, setUsers] = useState([])
  const [usersCopy, setUsersCopy] = useState([])

  useEffect(() => {
    setUsers(data)
    setUsersCopy(data)
  }, [data])

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => setUsersCopy(usersCopy.filter(user => user.id !== id));

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => setUsersCopy(users.filter(user => user.name.toLowerCase().startsWith(searchText.toLowerCase())));

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {users && <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
