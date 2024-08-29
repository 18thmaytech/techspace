import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ name, image, chatLink, profileLink }) => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const handleProfileClick = () => {
    setShowProfilePopup(true);
  };

  const handleClosePopup = () => {
    setShowProfilePopup(false);
  };

  return (
    <div className="friend">
      <img src={image} alt={`${name}'s profile`} className="friend-image" />
      <h3>{name}</h3>
      <Link to={chatLink}>Chat</Link>
      <button onClick={handleProfileClick}>Profile</button>
      
      {showProfilePopup && (
        <div className="profile-popup">
          <div className="popup-content">
            <button onClick={handleClosePopup} className="close-button">X</button>
            <img src={image} alt={`${name}'s profile`} className="profile-popup-image" />
            <h4>{name}</h4>
            <p>Student</p>
            <p>Level: 60</p>
            <p>Rank: [Rank Info]</p>
          </div>
        </div>
      )}
    </div>
  );
};

const FriendsPage = () => {
  const friends = [
    {
      name: 'John Doe',
      image: '/path/to/john-image.jpg',
      chatLink: '/chat/john',
      profileLink: '/profile/john'
    },
    // Add more friends here
  ];

  return (
    <div className="friends-page">
      {friends.map((friend, index) => (
        <Friend 
          key={index}
          name={friend.name}
          image={friend.image}
          chatLink={friend.chatLink}
          profileLink={friend.profileLink}
        />
      ))}
    </div>
  );
};

export default FriendsPage;
