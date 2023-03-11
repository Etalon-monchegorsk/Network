import React from 'react';
import ProfileModuleStyle from './Profile.module.css';
import Wall from './Wall/Wall.jsx';
import Posts from './Posts/Posts.jsx';
import { AddPost } from '../../State/State.js'; // импортируем функцию AddPost, такая функция называется collBack

function Profile() {
  return (
    <div className={ProfileModuleStyle.container}>
      <Wall />
      <Posts AddPost={AddPost} /> {/*Передаем функцию AddPost в компоненту Posts с помощью props*/}
      
    </div>
  )
}

export default Profile;