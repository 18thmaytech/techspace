import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { name } = useParams();

  // Replace with actual data fetching logic
  const profileData = {
    image: '/path/to/profile-image.jpg',
    userName: name,
    student: 'Student',
    level: 60,
    rank: '[Rank Info]'
  };

  return (
    <div className="profile-page">
      <img src={profileData.image} alt={`${profileData.userName}'s profile`} className="profile-image" />
      <h4>{profileData.userName}</h4>
      <p>{profileData.student}</p>
      <p>Level: {profileData.level}</p>
      <p>Rank: {profileData.rank}</p>
    </div>
  );
};

export default ProfilePage;
