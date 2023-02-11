import React from 'react';
import ProfileModuleStyle from './Profile.module.css';
import Wall from './Wall/Wall.jsx';
import Posts from './Posts/Posts.jsx';

function Profile() {
  return (
    <div className={ProfileModuleStyle.container}>
      <Wall />
      <Posts />
    </div>
  )
}

export default Profile;