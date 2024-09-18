import React, { useState } from 'react';

const UserInfo = ({ name, age, occupation }) => {
  return (
    <div className="user-info">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Occupation:</strong> {occupation}</p>
    </div>
  );
};

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Raj Kishore',
    age: 20,
    occupation: 'Software Developer Intern',
    bio: 'A Passionate Student about coding and technology.'
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
              placeholder="Age"
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="occupation"
              value={user.occupation}
              onChange={handleChange}
              placeholder="Occupation"
            />
          </div>
          <div className="input-box">
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              placeholder="Bio"
            />
          </div>
          <button type="submit">Save Profile</button>
        </form>
      ) : (
        <div>
          <UserInfo 
            name={user.name} 
            age={user.age} 
            occupation={user.occupation} 
          />
          <p><strong>Bio:</strong> {user.bio}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;